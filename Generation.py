from termcolor import colored
import google.generativeai as genai
import os

key=os.getenv("GOOGLE_API_KEY")
if key is None:
    print("Please set the GOOGLE_API_KEY environment variable to your API key.")
    exit(1)
genai.configure(api_key=key)
print("Paste Tweets from chrome extension, type 'q' to quit:")
tweets = []
while True:
    line = input()
    if line.strip() == "q":  # Break on q
        break
    tweets.append(line.strip())
tweetstr = "\n".join(tweets)
inp = "Here are a list of tweets from a user: " + tweetstr + "\nWrite a new and unique tweet based on those ones: "

model = genai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content(inp)
print(colored(response.text, "green"))
