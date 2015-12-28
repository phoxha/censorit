// popup.js



window.onload = function() {


	document.body.onload = function() {
	alert("get");
  chrome.storage.sync.get("data", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("data").innerText = items.data;
    }
  });
}

document.getElementById("set").onclick = function() {
	
  var d = document.getElementById("text").value;
  chrome.storage.sync.set({ "data" : d }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
    else
    {
    	alert("saved!");
    }
  });
  window.close();
}
    document.getElementById("button").onclick = function() {
        chrome.extension.sendMessage({
            type: "color-divs"
        });
    }

    document.getElementById("btnTrump").onclick = function() {
        chrome.extension.sendMessage({
            type: "clear-trump"
        });
    }

  //   document.getElementById("save").onclick = function() {
		// // Get a value saved in a form.
  //       //var theValue = textarea.value;
  //       var theValue = document.getElementById("txt_name").value;//$('#txt_name').val();
  //       alert(theValue);
  //       // Check that there's some code there.
  //       if (!theValue) {
  //         message('Error: No value specified');
  //         return;
  //       }
        

  //   }

    function saveChanges() {

        // Get a value saved in a form.
        //var theValue = textarea.value;
        var theValue = $('#txt_name').val();
        alert(theValue);
        // Check that there's some code there.
        if (!theValue) {
          message('Error: No value specified');
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': theValue}, function() {
          // Notify that we saved.
          message('Settings saved');
        });
      }


}