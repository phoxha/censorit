<<<<<<< HEAD
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //sendResponse(myFunc(request.args));

     alert(request.args);

     // $(function() {
     //            //var foundin = $('*:contains("trump")');
     //            $(':contains(message.text):not(:has(*))').hide();
     //            $("img[alt*='message.text']").hide();
     //            $(':contains(message.text):not(:has(*))').hide();
     //            $("img[alt*='message.text']").hide();
                
     //        });
});


=======
>>>>>>> parent of 72be799... push
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
                $(':contains(message.text):not(:has(*))').hide();
                $("img[alt*='message.text']").hide();
                $(':contains(message.text):not(:has(*))').hide();
                $("img[alt*='message.text']").hide();
                
            });
        break;

    }
});