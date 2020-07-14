function scrollDown(target){
	var curr=0; 
	var scrollInterval=setInterval(function(){
	if(curr>=target){
		clearInterval(scrollInterval);
		return;
	}
	curr=curr+50;
	window.scrollBy(0,50);
},50);

}
// Skills
var skills=document.getElementById('skills-nav');
skills.addEventListener('click' ,function(){
	scrollDown(842);
} );
// Experience
var experience=document.getElementById('experience-nav');
experience.addEventListener('click' , function(){
	scrollDown(1494.6666259765625);
});
// Education
var education=document.getElementById('education-nav');
education.addEventListener('click', function(){
	scrollDown(2200);
});
// Portfolio
var portfolio =document.getElementById('portfolio-nav');
portfolio.addEventListener('click', function(){
	scrollDown(3100);
});
// Contact
var contact =document.getElementById('contact-nav');
contact.addEventListener('click', function(){
	scrollDown(4000);
});



// Button

function scrollUp(target){
	var curr=4000; 
	var scrollInterval=setInterval(function(){
	if(curr<=target){
		clearInterval(scrollInterval);
		return;
	}
	curr=curr-50;
	window.scrollBy(0,-50);
},50);

}

var button =document.getElementById('top');
button.addEventListener('click', function(){
	scrollUp(0);
})

