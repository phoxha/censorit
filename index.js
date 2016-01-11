

window.onload = function () {

     var arr = sessionStorage.getItem('Removed');
         $("#removed").html( arr.toString() );
        $("#removed").append("<ul></ul>");
        for(var i in arr) {
            var li = "<li>";
            $("ul").append(li.concat(arr[i]))
        }   
}