chrome.cookies.get({ url: 'https://streamhub.watch', name: 'streamhub' },
  function (cookie) {
    if (cookie) {
      console.log(cookie.value);
    }
    else {
      console.log("You aren't logged in on Streamhub.watch!!");
    }
});
