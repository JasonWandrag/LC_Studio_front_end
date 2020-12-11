// Check if class changes
let element = document.getElementsByTagName("body")[0];
let header = document.getElementById("landing-anchor");
let observer = new MutationObserver(function (event) {
  let selected = event[0].target;
  if (selected.classList.contains("yellow")) {
    header.innerHTML = `Transforming the tech<br>industry in South Africa`;
  } else if (selected.classList.contains("blue")) {
    header.innerHTML = "Doing good is<br>good business";
  } else {
    header.innerHTML = "Digital Solutions developed<br>by youth";
  }
});

observer.observe(element, {
  attributes: true,
  attributeFilter: ["class"],
  childList: false,
  characterData: false,
});
