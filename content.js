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