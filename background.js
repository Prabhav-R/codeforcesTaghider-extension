chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ hide: false }, function () {
    console.log("CodeForcesTagsHider extension installed!!");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "codeforces.com" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});
