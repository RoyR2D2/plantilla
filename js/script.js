function updatemenu() {
	if (document.getElementById('responsive-menu').checked == true) {
	  document.getElementById('menu').style.borderBottomRightRadius = '0';
	  document.getElementById('menu').style.borderBottomLeftRadius = '0';
	}else{
	  document.getElementById('menu').style.borderRadius = '0px';
	}
  }
  let slideIndex = 0;
  showSlides();
  
  function changeSlide(n) {
	showSlides(slideIndex += n);
  }
  
  function showSlides() {
	let i;
	let slides = document.getElementsByClassName("slide");
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display   
   = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides,   
   4000); // Cambia la imagen cada 4 segundos
  }
  
  