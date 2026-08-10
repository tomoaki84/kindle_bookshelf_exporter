const bookshelfURL =
  "https://www.amazon.co.jp/hz/mycd/digital-console/contentlist/booksAll/";

chrome.action.onClicked.addListener(async () => {
  const tab = await chrome.tabs.create({ url: bookshelfURL });
  if (!tab.id) return;

  // The content script needs Amazon's page context (csrfToken), so inject only
  // after the newly opened Content Library page has finished loading.
  const injectWhenReady = async (tabId, changeInfo) => {
    if (tabId !== tab.id || changeInfo.status !== "complete") return;
    chrome.tabs.onUpdated.removeListener(injectWhenReady);
    try {
      await chrome.scripting.executeScript({
        target: { tabId },
        files: ["content.js"],
        world: "MAIN",
      });
    } catch (error) {
      console.error(
        "Kindle Bookshelf Exporter: script injection failed",
        error,
      );
    }
  };
  chrome.tabs.onUpdated.addListener(injectWhenReady);
});
