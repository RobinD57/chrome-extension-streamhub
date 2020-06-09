function listenClick() {
  const button = document.getElementById('login-twitch');
  button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/send-data.js'
    });
  })
}

listenClick();
