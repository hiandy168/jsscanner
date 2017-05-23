

	window.onload = function(){
		new JSScanner({'callback': function(barcode){
			document.getElementById('barcode').innerHTML = '条码：'+ barcode;
		}});
	};
	