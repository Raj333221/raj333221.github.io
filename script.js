window.onload=function(){//write all of our JS in here
	alert("Page is Loaded");}
	
	function addStyleSheet(){const el=document.querySelector("link");el.href="style.css";}

	function testScript(){
	const tl=document.querySelector(".testInput");
	const para=document.querySelector("p");
	para.innerHTML=tl.value;}


	function myMove(){
		let id=null;
		const elem=document.getElementById("animate");
		let pos=0;
		clearInterval(id);
		id=setInterval(frame, 5);
		function frame(){
		if(pos==350){
		clearInterval(id);}
		else{
		pos++;
		elem.style.top = pos + 'px';
		elem.style.left = pos + 'px';}}}
	function myMov(){
		let id=null;
		const elem=document.getElementById("anim");
		let pos=0;
		clearInterval(id);
		id=setInterval(frame, 5);
		function frame(){
		if(pos==350){
		clearInterval(id);}
		else{
		pos++;
		elem.style.top = pos + 'px';
		elem.style.center = pos + 'px';}}}
	function myMo(){
		let id=null;
		const elem=document.getElementById("anims");
		let pos=0;
		clearInterval(id);
		id=setInterval(frame, 5);
		function frame(){
		if(pos==350){
		clearInterval(id);}
		else{
		pos++;
		elem.style.top = pos + 'px';
		elem.style.right = pos + 'px';}}}
	function bMove(){
		let id=null;
		const elem=document.getElementById("brigh");
		let pos=0;
		clearInterval(id);
		id=setInterval(frame, 5);
		function frame(){
		if(pos==350){
		clearInterval(id);}
		else{
		pos++;
		elem.style.bottom = pos + 'px';
		elem.style.right = pos + 'px';}}}
	function bMcen(){
		let id=null;
		const elem=document.getElementById("bcen");
		let pos=0;
		clearInterval(id);
		id=setInterval(frame, 5);
		function frame(){
		if(pos==350){
		clearInterval(id);}
		else{
		pos++;
		elem.style.bottom = pos + 'px';
		elem.style.right = pos + 'px';}}}
	function bMlef(){
		let id=null;
		const elem=document.getElementById("bleft");
		let pos=0;
		clearInterval(id);
		id=setInterval(frame, 5);
		function frame(){
		if(pos==350){
		clearInterval(id);}
		else{
		pos++;
		elem.style.bottom = pos + 'px';
		elem.style.left = pos + 'px';}}}
	


	//global 3variables
	var timer;var left=0;var degree=0;
 
	//method to move the wheel
	function moveWheel()
	{var line1=document.getElementById("line1");
	var line2=document.getElementById("line2");
	var wheel=document.getElementById("wheel");
	left +=30;
	degree+=18;
	wheel.style.marginLeft= left+"px";
	line1.style.transform = "rotate("+degree+"deg)";
	line2.style.transform = "rotate("+degree+"deg)";
	if(left==600){left=0;}
	if(degree==360){degree=0;}}
 
	//method to handle start/stop of wheel
	function start()
	{var btn=document.getElementById("start-btn");
	
	if(btn.innerHTML.trim()==='Start')
	{//start moving the wheel
	timer=setInterval(function(){moveWheel();            
        },300);
        btn.innerHTML='Stop';}
	
	else{//stop moving the wheel
        clearInterval(timer);
	btn.innerHTML='Start';}}

	
	window.onscroll = function() {myFunction()};
	var nBar = document.getElementById("clip");
	var sticky = nBar.offsetTop;
	var fBar = document.getElementById("navLinks");
	var sticky1 = fBar.offsetTop;
	function myFunction() {
	if (window.pageYOffset >= sticky && window.pageYOffset >= sticky1) {
		nBar.classList.add("sticky");
		fBar.classList.add("sticky1");
	} else {
		nBar.classList.remove("sticky");
		fBar.classList.remove("sticky1");
	}
	}

	// window.onscroll = function() {myFunction2()};
	// var fBar = document.getElementById("navLinks");
	// var sticky1 = fBar.offsetTop;
	// function myFunction2() {
	// if (window.scrollY >= sticky1) {
	// 	fBar.classList.add("sticky1")
	// } else {
	// 	fBar.classList.remove("sticky1");
	// }
	// }




	
	
	function myMap() {
	var mapProp= {
	center:new google.maps.LatLng(0.0,0.0),
	zoom:5,};
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);}