jQuery( document ).ready(function( $ ) {
  // Code using $ as usual goes here.

            // Get saved data from sessionStorage
            var arr = sessionStorage.getItem('Removed');
        $("#removed").append("<ul></ul>");
        for(var i in arr) {
            var li = "<li>";
            $("ul").append(li.concat(arr[i]))
        }    
});