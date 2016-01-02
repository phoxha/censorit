chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //sendResponse(myFunc(request.args));

     //alert(request.args);
        var obj = [];
     chrome.storage.sync.get('todo', function(keys) {
            if (keys.todo != null) {
                obj = keys.todo;
                //alert("inside:" + obj);
            }
        });
        //alert(obssssj);
        obj.forEach(function(entry) {
            if(!entry.completed)
            {
                alert(entry.content);
                $(':contains('+entry.content+'):not(:has(*))').hide();
                $("img[alt*='"+entry.content+"']").hide();
            }
            
        });
     
});


// chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
//     switch(message.type) {
//         case "color-divs":
//             var divs = document.querySelectorAll("div");
//             if(divs.length === 0) {
//                 alert("There are no any divs in the page.");
//             } else {

//                 for(var i=0; i<divs.length; i++) {
//                     divs[i].style.backgroundColor = message.color;
//                 }
//             }
//         break;
//         case "clear-trump":
//             $(function() {
//                 //var foundin = $('*:contains("trump")');
//                 $(':contains(message.text):not(:has(*))').hide();
//                 $("img[alt*='message.text']").hide();
//                 $(':contains(message.text):not(:has(*))').hide();
//                 $("img[alt*='message.text']").hide();
                
//             });
//         break;

//     }
// });