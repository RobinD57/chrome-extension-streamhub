chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="#C3413B"'
  });
});

chrome.cookies.get({ url: 'https://streamhub.watch', name: 'streamhub' },
  function (cookie) {
    if (cookie) {
      console.log(cookie.value);
    }
    else {
      console.log("You aren't logged in on Streamhub.watch!!");
    }
});
