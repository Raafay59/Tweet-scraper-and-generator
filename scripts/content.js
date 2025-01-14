chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "scroll") {
    scroll();
  }
});

function scroll() {
  counter = 1;
  console.log("scrolling");
  let tweets = [];
  var i = 0;
  var interval = setInterval(function () {
    if (
      i < 20 &&
      window.innerHeight + window.scrollY < document.body.scrollHeight
    ) {
      window.scrollTo(0, document.body.scrollHeight);
      let tweet = document.querySelectorAll("article");
      tweet.forEach((tweet) => {
        let tweetText = tweet.querySelector("div[data-testid='tweetText']");
        if (tweetText) {
          tweets.push("Tweet " + counter + ": " + tweetText.innerText);
          counter++;
        }
      });
      i++;
    } else {
      clearInterval(interval);
      console.log(tweets);
      chrome.runtime.sendMessage({ action: "sendTweets", posts: tweets });
    }
  }, 1000);
}
