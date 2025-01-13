document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("tweetButton").addEventListener("click", click);
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var tweets = request.posts;
  if (request.action == "sendTweets") {
    console.log("popup.js received the tweets");
    console.log(tweets);
  }
  document.getElementById("tweetButton").disabled = false;
  tweets = cleanTweets(tweets);
  var ul = document.createElement("ul");
  ul.id = "tweets";
  tweets.forEach((tweet) => {
    var li = document.createElement("li");
    li.textContent = tweet;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
  var copier = document.createElement("button");
  copier.textContent = "Copy Tweets";
  copier.addEventListener("click", copy);
  document.body.appendChild(copier);
});

function cleanTweets(tweets) {
  tweets = Array.from(new Set(tweets));
  tweets = tweets.filter((tweet) => tweet.trim() != "");
  return tweets;
}

function click() {
  console.log("click");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    if (url.includes("https://x.com/search")) {
      console.log("good");
      document.getElementById("tweetButton").disabled = true;
      scroll();
    } else {
      console.log("bad");
    }
  });
}

function scroll() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "scroll" });
  });
}

function copy() {
  var tweets = document.getElementById("tweets");
  var text = "";
  tweets.childNodes.forEach((tweet) => {
    text += tweet.textContent + "\n";
  });
  navigator.clipboard.writeText(text);
}
