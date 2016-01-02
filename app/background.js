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

    // do your things
    alert("aha!!");

    alert("a");
    var scope = angular.element($("#outer")).scope();
    scope.$apply(function(){
        scope.msg = 'Superhero';
    })

    var elem = angular.element(document.querySelector('[ng-app]'));
    var injector = elem.injector();
     var $rootScope = injector.get('$rootScope');  

     alert($rootScope.todoStorage.data); 
     
     // $rootScope.$apply(function(){
     //   $rootScope.text = new Date();
     // });



    chrome.tabs.sendMessage(tab.id, {args: _this.data}, function(response) {
      // ...
    });

  }
})