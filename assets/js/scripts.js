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
