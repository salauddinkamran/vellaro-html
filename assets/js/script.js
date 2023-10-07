const navbar = document.querySelector('.navbar');
const barBtn = document.querySelector('.fa-bars-staggered');

barBtn.addEventListener('click', toggleNav);
function toggleNav() {
  navbar.classList.toggle('active-nav')
}


var videoPlayer = document.getElementById('videoPlayer');
var myVideo = document.getElementById('myVideo');
var closebtn = document.getElementsByClassName('close-btn');
function stopvideo() {
  videoPlayer.style.display = "none";
}
function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}


var swiper = new Swiper(".mySlide", {
  slidesPerView: 6,
  spaceBetween: 60,
  // grabCursor: true,
  preview: 6,
  loop:true,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});




