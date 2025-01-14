Installation
Clone the Repository

bash
Copy code
git clone https://github.com/Tweet-scraper-and-generator
cd Tweet-scraper-and-generator
Load the Extension

Open Chrome and navigate to chrome://extensions.
Enable "Developer Mode" (toggle in the top-right corner).
Click "Load Unpacked" and select the cloned repository folder.
Usage
Run the Extension on X (formerly Twitter)

Go to X.com and perform a search for tweets from a specific account:
plaintext
Copy code
From:AccountName
Activate the extension and collect the desired tweets.
Tip: Copy the tweets and paste them somewhere to save for later use.
Set Up Google Generative AI API

Get your API key from Google AI Studio.
Prepare Your Environment

Open a terminal and navigate to the cloned repository:

bash
Copy code
cd your-repository-name
Install the required Python package:

bash
Copy code
pip install -q -U google-generativeai
Set your Google API key:
Windows:

bash
Copy code
setx GOOGLE_API_KEY "your-api-key"
Mac/Linux:

bash
Copy code
export GOOGLE_API_KEY="your-api-key"
Restart your terminal if necessary.

Run the Script
Execute the script to process your collected tweets:

bash
Copy code
python Generation.py
