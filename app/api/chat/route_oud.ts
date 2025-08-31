// app/api/chat/route.ts
// op hoop van zegen...
import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Ontvangen body:", body);

    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const stream = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are a helpful teaching assistant for an informatics course that uses basic Python.
Answer questions about programming and related topics.
Respond in the same language as the user (Dutch or English).
Never give a straight answer, but rather ask a question to the user to help them find the answer themselves.
          `,
        },
        ...body.messages,
      ],
      stream: true,
      max_tokens: 500,
    });

    // ReadableStream voor Next.js useChat
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
          const err = error instanceof Error ? error : new Error(String(error));
          controller.error(err);
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
    const error = err instanceof Error ? err : new Error(String(err));
    console.error("Fout bij OpenAI:", error);

    return NextResponse.json(
      {
        error: error.message || "Interne serverfout",
        details: "Controleer je OPENAI_API_KEY en modelnaam",
      },
      { status: 500 }
    );
  }
}
