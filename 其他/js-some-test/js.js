function jsJq(){
	var el=document.createElement('script');
	el.src='jquery.min.js';
	var tar=document.getElementsByTagName('head')[0];
	console.log(tar);
	tar.appendChild(el);
};
jsJq();
function jsRun(){
	var el=document.createElement('script');
	el.src='run.js';
	var tar=document.getElementsByTagName('head')[0];
	console.log(tar);
	tar.appendChild(el);
};
jsRun();