from google import genai
from google.genai import types
import streamlit as st

client = genai.Client(api_key="")

chat = client.chats.create(model="gemini-2.0-flash",
                           config=types.GenerateContentConfig(system_instruction="Je bent een kat"))

st.title("Chatbot")

user_input = st.text_input("Jij: ")

if st.button("Verstuur"):  # Button to trigger the response
    if user_input.lower() == "stop":
        st.write("Tot ziens!") # Better than just stopping
        st.stop() # Stop the Streamlit app
    else:
        response = chat.send_message(user_input)
        st.write("Chatbot: ", response.text)
