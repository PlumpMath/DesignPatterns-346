 var Logger = function() {
 	var _self = this;
 	_self.msg = "Default msg: ";
 	_self.log = function(val) {
 		console.log(_self.msg, val);
 	};
 };


 var logger1 = new Logger();
 var logger2 = new Logger();

 logger1.log('Test');
 // Default msg:  Test

 logger2.log('Test');
 // Default msg:  Test

 logger1.setMsg = function(newVal) {
 	this.msg = newVal;
 };

 logger1.setMsg('New Msg: ');

 logger1.log('Test');
 // New Msg:  Test