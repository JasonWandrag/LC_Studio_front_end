// Animate logo
var svg = document.getElementsByTagName("svg")[0];
var bbox = svg.getBBox();
var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
svg.setAttribute("viewBox", viewBox);

function restartAnimation(el) {
  let elm = el;
  let newone = elm.cloneNode(true);
  elm.parentNode.replaceChild(newone, elm);
}
function loadHome() {
  window.location.href = "/";
}
