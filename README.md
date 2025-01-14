### Clone the repo
```bash
git clone https://github.com/Tweet-scraper-and-generator
```
### Get your tweets
- Open Chrome and navigate to chrome://extensions.
- Enable "Developer Mode" (toggle in the top-right corner).
- Click "Load Unpacked" and select the cloned repository folder.
- Run the Extension on X (formerly Twitter)
- Go to X.com and perform a search for tweets from a specific account:
  - From:AccountName
- Activate the extension and collect the desired tweets.
  - Tip: Copy the tweets and paste them somewhere to save for later use.

### Set Up Google Generative AI API
- Get your API key from [Google AI Studio.](https://aistudio.google.com/apikey)
### Prepare Your Environment
- ```bash
    cd Tweet-scraper-and-generator
    pip install -q -U google-generativeai
    ```
- Windows:
  ```bash
  setx GOOGLE_API_KEY "your-api-key"
  ```
- Mac/Linux:
  ```bash
  export GOOGLE_API_KEY="your-api-key"
  ```
### Run the program
- ```bash
  Python Generation.py
  ```
