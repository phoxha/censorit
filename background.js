// omnibox
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
    suggest([
      {content: "color-divs", description: "Make everything red"}
    ]);
});
chrome.omnibox.onInputEntered.addListener(function(text) {
    if(text == "color-divs") colorDivs();
    if(text == "clear-trump") cleartrump();
});
 
// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "color-divs":
            colorDivs();
        break;
        case "clear-trump":
            cleartrump();
        break;
    }
    return true;
});
 
// listening for an event / long-lived connections
// coming from devtools
chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
        switch(port.name) {
            case "color-divs-port":
                colorDivs();
            break;
            case "clear-trump-port":
                cleartrump();
            break;
        }
    });
});
 
// send a message to the content script
var colorDivs = function() {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "color-divs", color: "#F00"});
        // setting a badge
        chrome.browserAction.setBadgeText({text: "red!"});
    });
}

// send a message to the content script
var cleartrump = function() {

    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "clear-trump", text: "Trump"});
        // setting a badge
        chrome.browserAction.setBadgeText({text: "Trump!"});
    });
}