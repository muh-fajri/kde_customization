//scroll to top
btnTop = document.getElementById("toTop");
window.onscroll = function() {scroll()};
function scroll() {
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}
function gotoTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// -- scroll to top --