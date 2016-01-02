

window.onload = function() {

setColor();

function setColor(){
	document.body.style.backgroundColor='lightgreen';
	alert ("The document has been loaded.");
}


	// // popup.js
	// document.body.onload = function() {
	// 	alert("get");
	//   chrome.storage.local.get("data", function(items) {
	//     if (!chrome.runtime.error) {
	//       console.log(items);
	//       document.getElementById("data").innerText = items.data;
	//     }
	//     else
	//     {
	//     	alert("got it!");
	//     }
	//   });
	// }
	
	document.getElementById("clear").onclick = function() {

		chrome.storage.local.clear()
		var storage = chrome.storage.local;
		var	prevArray = [];
		var myTestVar = 'Keyword';
		var obj= {};
		prevArray =[{name:"test", status:"1"}];

		obj[myTestVar]=prevArray;
		storage.set(obj);


		document.getElementById("settings").innerHTML="";
	}

	document.getElementById("set").onclick = function() {

		//alert("1");
		var storage = chrome.storage.local;
		//chrome.storage.local.clear()
		var d = document.getElementById("text").value;
		var myTestVar = 'Keyword';
		var resultvalue = {};
		var obj= {};
		var objPrev= {};
		
		//obj[myTestVar] = d;
		var oldvalue="";
		storage.get(myTestVar,function(result){
				  //objPrev[myTestVar]=result;
				  objPrev=result;
				  //console output = myVariableKeyName {myTestVar:'my test var'}
				});
		//populate
		var	prevArray = [];
		//prevArray =[{name:"test", status:"1"}];
		
		 // if(jQuery.isEmptyObject(objPrev))
		 // {
			
		 // }
		 // else{
		 	prevArray = objPrev[myTestVar];
		 	//}
		
		
		//var text = [];

		prevArray.push({name:d, status:"1"});
		obj[myTestVar]=prevArray;

		//clear storage
		//obj= {};
		storage.set(obj);

		
		storage.get(myTestVar,function(result){
		  //alert(myTestVar,result);
		  prevArray = objPrev[myTestVar];
		});
		var par = "";
		  prevArray.forEach(function(entry) {
		    par += entry.name + " " + entry.status + ", ";
		});

		  document.getElementById("settings").innerHTML = par;



		// var storage = chrome.storage.local;
	 //  var d = document.getElementById("text").value;
	 //  //alert(d);
	 //  storage.set({ "data" : d }, function() {
	 //  	alert("saved!11");
	 //    if (chrome.runtime.error) {
	 //      console.log("Runtime error.");
	 //    }
	 //    else
	 //    {
	 //    	alert("saved!");
	 //    }
	 //  });
	 //  window.close();
	}

	//old script
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