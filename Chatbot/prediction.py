import numpy as np
import tensorflow as tf
import random
import nltk
from nltk.stem.lancaster import LancasterStemmer
import pickle
import json
from fastapi import FastAPI, HTTPException
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://127.0.0.1:3000/input",
    "http://localhost:8080",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


stemmer = LancasterStemmer()
model = pickle.load(open("./model.pkl", "rb"), encoding="latin1")
classes = pickle.load(open("./classes.pkl", "rb"), encoding="latin1")
words = pickle.load(open("./words.pkl", "rb"), encoding="latin1")


with open("./dataset.json") as json_data:
    intents = json.load(json_data)


def response(user_input):
    user_input_words = nltk.word_tokenize(user_input)
    user_input_words = [stemmer.stem(word.lower()) for word in user_input_words]
    input_bag = [0] * len(words)
    for s in user_input_words:
        for i, w in enumerate(words):
            if w == s:
                input_bag[i] = 1

    input_bag = np.array(input_bag).reshape(1, -1)

    results = model.predict(input_bag)

    result_index = np.argmax(results)

    tag = classes[result_index]

    for intent in intents["intents"]:
        if intent["tag"] == tag:
            response = random.choice(intent["responses"])
            break

    return response


@app.get("/get")
async def intro():
    return {"message": "Welcome to the Chatbot"}


@app.post("/input")
async def create_item(input_data: dict):
    try:
        user_input = input_data["input"]
        answer = response(user_input)
        return {"bot": answer}
    except KeyError:
        raise HTTPException(
            status_code=422, detail="Missing 'input' field in the request body"
        )


if __name__ == "__main__":
    # while True:
    #     input_data = input("You: ")
    #     if input_data.lower() == "exit":
    #         break
    #     answer = response(input_data)
    #     print("Bot:", answer)

    uvicorn.run(app, host="127.0.0.1", port=8000)
