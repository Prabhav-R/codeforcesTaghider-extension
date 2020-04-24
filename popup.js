document.addEventListener("DOMContentLoaded", function () {
  const toggl = document.querySelector(".lever");

  chrome.storage.sync.get("hide", function (data) {
    if (data.hide) {
      toggl.click();
    }

    toggl.addEventListener("click", (e) => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: "toggle.js" });
      });
    });
  });
});
