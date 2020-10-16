//Start a project
let startProject = () => {
  document.getElementById("modal-container").removeAttribute("class");
  document.getElementById("modal-container").classList.add("one");
  document.getElementsByTagName("body")[0].classList.add("modal-active");
};

let closeProject = () => {
  document.getElementById("modal-container").classList.add("out");
  document.getElementsByTagName("body")[0].classList.remove("modal-active");
  topFunction();
};

// Scroll to top function
let topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Animate logo
var svg = document.getElementsByTagName("svg")[0];
var bbox = svg.getBBox();
var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
svg.setAttribute("viewBox", viewBox);

let AnimateLogo = () => {
  document.getElementById("Logo").setAttribute("class", "animated-logo");
  setTimeout(function () {
    document.getElementById("Logo").setAttribute("class", "static-logo");
  }, 2200);
};
