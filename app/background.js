// // omnibox
// chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
//     suggest([
//       {content: "color-divs", description: "Make everything red"}
//     ]);
// });
// chrome.omnibox.onInputEntered.addListener(function(text) {
//     if(text == "color-divs") colorDivs();
//     if(text == "clear-trump") cleartrump();
// });


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {

    var _this = {};
    
        _this = localStorage.getItem('todo');
        chrome.tabs.sendMessage(tab.id, {args: _this}, function(response) {
          // ...
          chrome.browserAction.setBadgeText({text: response.count});
        });

  }
})