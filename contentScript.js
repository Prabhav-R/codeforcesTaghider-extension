chrome.storage.sync.get("hide", function (data) {
  if (data.hide) {
    if (
      document.querySelectorAll(
        "div[style*='float: right; font-size: 1.1rem; padding-top: 1px; text-align: right;']"
      )[0].style.visibility !== "hidden"
    ) {
      document
        .querySelectorAll(
          "div[style*='float: right; font-size: 1.1rem; padding-top: 1px; text-align: right;']"
        )
        .forEach((tag) => (tag.style.visibility = "hidden"));
    }
  }
});
