function getId(id) {
  return document.getElementById(id);
}

getId("nav-toggle").addEventListener("click", function() {
  if ($(window).width() < 900) {
    getId("slide-bar").style.display = "block";
    getId("close-toggle").style.display = "block";
    getId("nav-toggle").style.display = "none";
  }
});

getId("close-toggle").addEventListener("click", function() {
  if ($(window).width() < 900) {
    getId("slide-bar").style.display = "none";
    getId("close-toggle").style.display = "none";
    getId("nav-toggle").style.display = "block";
  }
});
