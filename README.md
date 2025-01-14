clone the repository then load unpacked at chrome://extensions bc im not paying $5 to publish
Go to X.com and run the extension on a search of From:AccountName
Copy the tweets (paste them somewhere to save for later)
get an api key from https://aistudio.google.com/apikey
Open a terminal and cd into the repo
pip install -q -U google-generativeai
setx GOOGLE_API_KEY "your api key"
(restart your terminal if needed)
Python Generation.py
