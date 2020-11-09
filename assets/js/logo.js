// Animate logo
var svg = document.getElementsByTagName("svg")[0];
var bbox = svg.getBBox();
var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
svg.setAttribute("viewBox", viewBox);

// let AnimateLogo = () => {
//   document.getElementById("Logo").setAttribute("class", "animated-logo");
//   setTimeout(function () {
//     document.getElementById("Logo").setAttribute("class", "static-logo");
//   }, 2200);
// };
