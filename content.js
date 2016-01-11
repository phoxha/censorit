chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
var keywords = JSON.parse(request.args);
            var num = 0;
            var arr = [];

        keywords.forEach(function(entry) {
           
            if(!entry.completed)
            {
                arr.push(entry.content);

                        //todo not counting correctly
                        $('*:contains("'+entry.content+'")').each(function (idx, elem) {
                            num++; 
                            //var changed = $(elem).html().replace('cheese', 'cheese <b>is fantastic</b>');
                            //$(elem).html(changed);
                        });
                            //as user provided it
                            $(':contains('+entry.content+'):not(:has(*))').hide();
                            $("img[alt*='"+entry.content+"']").hide();
                            $('img[src*="'+entry.content+'"]').hide();
                            $('a[href*="'+entry.content+'"]').hide();
                            $("p:contains('"+entry.content+"')" ).hide();
                            $("u:contains('"+entry.content+"')" ).hide();
                            $("li:contains('"+entry.content+"')" ).hide();
                            $("a:contains('"+entry.content+"')" ).hide();
                            $("li:contains('"+entry.content+"')" ).hide();

                            //to lower case
                             $(':contains('+entry.content.toLowerCase()+'):not(:has(*))').hide();
                            $("img[alt*='"+entry.content.toLowerCase()+"']").hide();
                            $('img[src*="'+entry.content.toLowerCase()+'"]').hide();
                            $('a[href*="'+entry.content.toLowerCase()+'"]').hide();
                            $("p:contains('"+entry.content.toLowerCase()+"')" ).hide();
                            $("u:contains('"+entry.content.toLowerCase()+"')" ).hide();
                            $("li:contains('"+entry.content.toLowerCase()+"')" ).hide();
                            $("a:contains('"+entry.content.toLowerCase()+"')" ).hide();
                            $("li:contains('"+entry.content.toLowerCase()+"')" ).hide();                                    
                                

                   

            }
            
        });
                 // Save data to sessionStorage
            sessionStorage.setItem('Removed', arr);
            var n = num.toString();
            sendResponse({count: n}); 
});
