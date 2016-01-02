document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('set');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
	 d = document;

	//       var f = d.createElement('form');
	//       f.action = 'http://gtmetrix.com/analyze.html?bm';
	//       f.method = 'post';
	//       var i = d.createElement('input');
	//       i.type = 'hidden';
	//       i.name = 'url';
	//       i.value = tab.url;
	//       f.appendChild(i);
	//       d.body.appendChild(f);
	//       f.submit();
	var storage = chrome.storage.sync;
	var data = d.getElementById("text").value;
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
		
		chrome.storage.sync.get(null, function(items) {
		    //var allKeys = Object.keys(items);
		    console.log(items);
		});

		 if(!jQuery.isEmptyObject(objIsEmpty))
		 {
			objPrev = objIsEmpty;
			objPrev[myTestVar].push({name:data, status:"1"});
		 }
		 else
		 {
			objPrev[myTestVar] = [{name:data, status:"1"}];
		 }
		storage.clear()
		storage.set(objPrev);

		
		storage.get(myTestVar,function(result){
		  objPrev = result;
		});
		
		var par = "";
		  objPrev[myTestVar].forEach(function(entry) {
		    par += entry.name + " " + entry.status + ", ";
		});
		
		$( ".settings" ).text( par );

    });
  }, false);
}, false);

// //window.onload = function() {

// 	//getSettings();

// 	function getSettings(){

// 		var storage = chrome.storage.sync;
// 		var myTestVar = 'Keyword';
// 		var resultvalue = {};
// 		var obj= {};
// 		var objPrev= {};
// 		//obj[myTestVar] = d;
// 		var oldvalue="";
// 		storage.get(myTestVar,function(result){
// 				  //objPrev[myTestVar]=result;
// 				  objPrev=result;
// 				  //console output = myVariableKeyName {myTestVar:'my test var'}
// 				});
		
// 		 if(!jQuery.isEmptyObject(objPrev))
// 		 {

// 			var par = "";
// 			  objPrev[myTestVar].forEach(function(entry) {
// 			    par += entry.name + " " + entry.status + ", ";
// 			    console.log(par);
// 			});

// 		  	//document.getElementById("settings").innerHTML = par;
// 		  	$( ".settings" ).text( par );

// 		}
// 	}
	
// 	document.getElementById("clear").onclick = function() {

// 		chrome.storage.sync.clear()
// 		document.getElementById("settings").innerHTML="";
// 	}

// 	document.getElementById("set").onclick = function() {



// 		//alert("1");
// 		var storage = chrome.storage.sync;
// 		//chrome.storage.local.clear()
// 		var d = document.getElementById("text").value;
		
// 		//var par =chrome.extension.getBackgroundPage().updateKeywords(d);
		
// 		chrome.tabs.getSelected(null, function(tab) {
// 		    chrome.tabs.sendRequest(tab.id, {greeting: "hello"}, function(response) {
// 		       alert(response.farewell);
// 		    });
// 		   });

// 		var myTestVar = 'Keyword';
// 		var resultvalue = {};
// 		var obj= {};
// 		var objPrev= {};

// 		var objIsEmpty= {};
// 		//obj[myTestVar] = d;
// 		var oldvalue="";
// 		storage.get(myTestVar,function(result){
// 				  //objPrev[myTestVar]=result;
// 				  objIsEmpty=result;
// 				  //console output = myVariableKeyName {myTestVar:'my test var'}
// 				});
		
// 		chrome.storage.sync.get(null, function(items) {
// 		    var allKeys = Object.keys(items);
// 		    console.log(allKeys);
// 		});

// 		 if(!jQuery.isEmptyObject(objIsEmpty))
// 		 {
// 			objPrev = objIsEmpty;
// 			objPrev[myTestVar].push({name:d, status:"1"});
// 		 }
// 		 else
// 		 {
// 			objPrev[myTestVar] = [{name:d, status:"1"}];
// 		 }
// 		storage.clear()
// 		storage.set(objPrev);

		
// 		storage.get(myTestVar,function(result){
// 		  objPrev = result;
// 		});
		
// 		var par = "";
// 		  objPrev[myTestVar].forEach(function(entry) {
// 		    par += entry.name + " " + entry.status + ", ";
// 		});
		
// 		$( ".settings" ).text( par );
// 		//  document.getElementById("settings").innerHTML = par;
// 	}

// 	// //old script
//  //    document.getElementById("button").onclick = function() {
//  //        chrome.extension.sendMessage({
//  //            type: "color-divs"
//  //        });
//  //    }

//  //    document.getElementById("btnTrump").onclick = function() {
//  //        chrome.extension.sendMessage({
//  //            type: "clear-trump"
//  //        });
//  //    }

//   //   document.getElementById("save").onclick = function() {
// 		// // Get a value saved in a form.
//   //       //var theValue = textarea.value;
//   //       var theValue = document.getElementById("txt_name").value;//$('#txt_name').val();
//   //       alert(theValue);
//   //       // Check that there's some code there.
//   //       if (!theValue) {
//   //         message('Error: No value specified');
//   //         return;
//   //       }
        

//   //   }

//     // function saveChanges() {

//     //     // Get a value saved in a form.
//     //     //var theValue = textarea.value;
//     //     var theValue = $('#txt_name').val();
//     //     alert(theValue);
//     //     // Check that there's some code there.
//     //     if (!theValue) {
//     //       message('Error: No value specified');
//     //       return;
//     //     }
//     //     // Save it using the Chrome extension storage API.
//     //     chrome.storage.sync.set({'value': theValue}, function() {
//     //       // Notify that we saved.
//     //       message('Settings saved');
//     //     });
//     //   }


// //}