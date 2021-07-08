
var cserae=document.querySelector('.cserae');
var input=document.querySelector('.input');

function fulSearce(){
	
	input.classList.toggle('inputActive');

}





// searce


	var menuitems =document.getElementById("menuitems");
	menuitems.style.maxHeight ="0px";

	function menutoggle() {
		if (menuitems.style.maxHeight =="0px") {
			menuitems.style.maxHeight ="400px";
		}
		else{
			menuitems.style.maxHeight ="0px";
		}
	}
		




// form slider

var log =document.querySelector('#log');
var reg =document.querySelector('#reg');
var sliderbtn =document.querySelector('.sliderbtn');


function regg(){
	log.style.left="400px";
	reg.style.left="-270px";
	sliderbtn.style.left="159px";

}

var log =document.querySelector('#log');
var reg =document.querySelector('#reg');
var sliderbtn =document.querySelector('.sliderbtn');


function logg(){
	log.style.left="0px";
	reg.style.left="0px";
	sliderbtn.style.left="0px";

}
// scroltop

var mybutton =document.getElementById("mybtn");
window.onscroll=function() {scrollfunction()};
function scrollfunction(){
if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){ mybutton.style.display ="block";}
else{mybutton.style.display ="none";}}
function topFunction(){
document.body.scrollTop=0;
document.documentElement.scrollTop=0;}



$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop()>300) {
	$('.navbar').addClass('active');
		}else {
			$('.navbar').removeClass('active');
		}
	})
	})


var linkall =document.querySelector('.s-link-all');
var linkallUl =document.querySelector('.linkallUl');

function slink(){
	linkall.classList.toggle('slinkActive');
	linkallUl.classList.toggle('linkallUlActive');
}


$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop()>400) {
	$('#a').addClass('actived');
		}else {
			$('#a').removeClass('actived');
		}
	})
	})




 AOS.init({
  		duration:1500
  });