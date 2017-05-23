

function JSScanner(options) {
	this.barcode = '';
	this.delaytimes = 300; //keydown和keyup之间的延迟毫秒
	this.keys = [];
	this.callback = options['callback'];
	var self = this;
	
	document.body.addEventListener('keyup', function(event){
		var temp_time = new Date().getTime();
		if(event.keyCode==13){
			var charlist = [];
			for(var i=0; i<self.keys.length; i++){
				if(temp_time - self.keys[i].time <= self.delaytimes){
					charlist.push(self.keys[i].key);
				}
			}
			self.barcode = charlist.join('');
			self.actionscan(self.barcode);
		}else{
			self.keys.push({'key': String.fromCharCode(event.which), 'time': temp_time});
		}
	});
}

JSScanner.prototype.actionscan = function(barcode){
	this.callback(barcode);
};
