var closeModel = document.getElementById("close");
var model = document.getElementById("model");

	closeModel.addEventListener("click", modelHide);

function modelHide(e){
	e.target.parentNode.classList.add("hide");
}


// $(window).scroll(function(){
// var wScroll = $(this).scrollTop();

// 	$(".card-1").css({
// 		'transform' : 'translate( '+ wScroll/12 +'%, -'+ wScroll /12 +'%)'
// 	});
// 	$(".card-3").css({
// 		'transform' : 'translate( -'+ wScroll/12 +'%, -'+ wScroll /12 +'%)'
// 	})
// 	$(".card-2").css({
// 		'transform' : 'scale(1.1) translate(0px, -'+ wScroll /12 +'%)',
// 	});
// });

$(document).ready(function(){

	var scrollLink = $(".nav-link")

	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top - 70
		}, 500 );
	})


$(window).scroll(function(){
	var scrollBarLocation = $(this).scrollTop();

	scrollLink.each(function(){
		  var sectionOffset = $(this.hash).offset().top - 70;
		  if( sectionOffset <= scrollBarLocation ){
		  	$(this).parent().addClass('active');
		  	$(this).parent().siblings().removeClass('active');
		  }
	})
})

})


// Goooieee Loader

var gooieBox = document.getElementById('gooie-box');
var gooiePercent = document.getElementById('gooie-percent');

var thePercent = (gooieBox.offsetLeft/3.74) ;

gooiePercent.innerHTML = thePercent;