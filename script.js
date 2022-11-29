var circle = document.getElementById("circle");
var clouds = document.getElementsByClassName("cloud");
var bushes = document.getElementsByClassName("bush");
var lines = document.getElementsByClassName("line");

setInterval(animateClouds, 1);
setInterval(animateBushes, 1);
setInterval(animateLines, 1);
function animateClouds() {
  for (var i=0; i<clouds.length; i++) {
    var cloudInfo = clouds[i].getBoundingClientRect();
    clouds[i].style.left = (cloudInfo.left-(1))+"px";
    if (cloudInfo.left<=(cloudInfo.width*-1)) {
      clouds[i].style.left = window.screen.width+"px";
    }
  }
}
function animateBushes() {
  for (var i=0; i<bushes.length; i++) {
    var bushInfo = bushes[i].getBoundingClientRect();
    bushes[i].style.left = (bushInfo.left-1)+"px";
    if (bushInfo.left<=(bushInfo.width*-1)) {
      bushes[i].style.left = window.screen.width+"px";
    }
  }
}
function animateLines() {
  for (var i=0; i<lines.length; i++) {
    var lineInfo = lines[i].getBoundingClientRect();
    lines[i].style.left = (lineInfo.left-1)+"px";
    if (lineInfo.left<=(lineInfo.width*-1)) {
      lines[i].style.left = window.screen.width+"px";
    }
  }
}
