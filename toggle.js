chrome.storage.sync.get("hide", function (data) {
  if (data.hide) {
    document
      .querySelectorAll(
        "div[style*='float: right; font-size: 1.1rem; padding-top: 1px; text-align: right;']"
      )
      .forEach((tag) => (tag.style.visibility = "visible"));
  } else {
    document
      .querySelectorAll(
        "div[style*='float: right; font-size: 1.1rem; padding-top: 1px; text-align: right;']"
      )
      .forEach((tag) => (tag.style.visibility = "hidden"));
  }

  chrome.storage.sync.set({ hide: !data.hide }, function () {});
});
