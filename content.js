// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//   alert("Fire");
//   if (changeInfo.status == 'complete' && tab.active) {

//     // do your things
//     alert("Fire");
//   }
// })

// testChromeStorage();

// function testChromeStorage() {  
//     console.log("Saving");
//     chrome.storage.sync.set({'value': theValue}, function() {
//         message('Settings saved');
//     });
//     chrome.storage.sync.get("value", function (retVal) {
//             console.log("Got it? " + retVal.value);
//     });
// }


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

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    switch(message.type) {
        case "color-divs":
            var divs = document.querySelectorAll("div");
            if(divs.length === 0) {
                alert("There are no any divs in the page.");
            } else {

                for(var i=0; i<divs.length; i++) {
                    divs[i].style.backgroundColor = message.color;
                }
            }
        break;
        case "clear-trump":
            $(function() {
                //var foundin = $('*:contains("trump")');
                $(':contains(trump):not(:has(*))').hide();
                $("img[alt*='trump']").hide();
                $(':contains(Trump):not(:has(*))').hide();
                $("img[alt*='Trump']").hide();

                $(':contains(ISIS):not(:has(*))').hide();
                $("img[alt*='ISIS']").hide();
                //alert("trump test");
                
            });
        break;

    }
});