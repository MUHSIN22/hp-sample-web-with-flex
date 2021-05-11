const navSlide = () => {
    const nav = document.querySelector('nav ul')
    nav.classList.toggle('nav-active')
}
$(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      $("nav").css("background","#252525");
    }
    else {
      $("nav").css("background","transparent");
   }
});