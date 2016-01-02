// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'g' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('popup.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});

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

function updateKeywords(d) {
    
    var storage = chrome.storage.sync;

        var myTestVar = 'Keyword';
        var resultvalue = {};
        var obj= {};
        var objPrev= {};

        var objIsEmpty= {};
        //obj[myTestVar] = d;
        var oldvalue="";
        storage.get(myTestVar,function(result){
                  //objPrev[myTestVar]=result;
                  objIsEmpty=result;
                  //console output = myVariableKeyName {myTestVar:'my test var'}
                });
        
         if(!jQuery.isEmptyObject(objIsEmpty))
         {
            objPrev = objIsEmpty;
            objPrev[myTestVar].push({name:d, status:"1"});
         }
         else
         {
            objPrev[myTestVar] = [{name:d, status:"1"}];
         }
        
        storage.set(objPrev);

        
        storage.get(myTestVar,function(result){
          objPrev = result;
        });

        var par = "";
          objPrev[myTestVar].forEach(function(entry) {
            par += entry.name + " " + entry.status + ", ";
        });
    return par;
};