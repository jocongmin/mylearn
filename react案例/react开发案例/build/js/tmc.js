var mymodule={};
var $=require('./jquery.min.js');
module.exports=mymodule;
mymodule.fnone=function(){
	$(function(){
		console.log('module one');
	})
}
mymodule.fntwo=function(){
	console.log('one');
}

mymodule.fnthree=function(){
	console.log('one');
}

mymodule.fnfour=function(){
	console.log('one');
}

