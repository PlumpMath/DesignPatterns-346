var logger = (function(){
 // unique instance of Logger class
 var instance;

 //Class definition
 var Logger = function(){
 // This will be the public method exposed through the 'instance'
 this.log = function(msg){
 // You can write service call to log message here
 console.log(msg);
 }
 }

 return {
 getInstance: function(){
 //Check if we already created the instance 
 //else create the new one
 if(!instance){
 instance = new Logger();
 }
 return instance;
 }
 }
})();
