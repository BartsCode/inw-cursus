// app/api/chat/route.ts
import OpenAI from "openai";
import { NextResponse } from "next/server";
import { AI_CONFIG } from "../../../components/ai-config";

// Voeg deze interface toe
interface ChatMessage {
  role: string;
  content: string;
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // Vervang 'any' met de ChatMessage interface
    const userMessages = body.messages.filter((msg: ChatMessage) => msg.role !== 'system');

    const stream = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: AI_CONFIG.systemPrompt,
        },
        ...userMessages,
      ],
      stream: true,
      max_tokens: 500,
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              controller.enqueue(new TextEncoder().encode(content));
            }
          }
          controller.close();
        } catch (error: unknown) {
          controller.error(error instanceof Error ? error : new Error(String(error)));
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });

  } catch (err: unknown) {
    console.error("Fout bij OpenAI:", err);

    return NextResponse.json(
      {
        error: "Interne serverfout",
      },
      { status: 500 }
    );
  }
}