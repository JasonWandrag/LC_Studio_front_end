let redirectTo = (page, section) => {
  document.getElementById("toggler").checked = false;
  let url = `${location.protocol}//${location.host}${page}#${section}`;
  return (window.location = url);
};

let openSubMenu = (subMenu) => {
  let menu = document.getElementById(`${subMenu}-sub-menu`);
  let menuButton = document.getElementById(`${subMenu}-sub-menu-button`);
  menu.classList.contains("active")
    ? menu.classList.remove("active")
    : menu.classList.add("active");
  menuButton.classList.contains("active")
    ? menuButton.classList.remove("active")
    : menuButton.classList.add("active");
};

let menuElement = document.getElementById("menuToggle");
let menuToggler = document.getElementById("toggler");

//I'm using "click" but it works with any event
document.addEventListener("click", function (event) {
  let isClickInside = menuElement.contains(event.target);
  let currentTarget = event.target;
  if (currentTarget === menuToggler) menuToggler.blur();
  if (!isClickInside) {
    document.getElementById("toggler").checked = false;
    //the click was outside the specifiedElement, do something
  }
});

// Function to check if element is in view
function elementInView(el) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let width = el.offsetWidth;
  let height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
}

let menuArray = [
  "landing",
  "we-are",
  "services",
  "team",
  "probono",
  "hire",
  "contact",
];

document.addEventListener(
  "scroll",
  function () {
    menuArray.map((menuItem) => {
      let elem = document.getElementById(menuItem);
      elementInView(elem)
        ? document
            .querySelectorAll(`[buttonFor=${menuItem}]`)[0]
            .classList.add("active")
        : document
            .querySelectorAll(`[buttonFor=${menuItem}]`)[0]
            .classList.remove("active");
    });
    // console.log(probonoSection);
    elementInView(probono)
      ? document
          .getElementsByClassName("modal-open-button")[0]
          .classList.add("in-probono")
      : document
          .getElementsByClassName("modal-open-button")[0]
          .classList.remove("in-probono");
  },
  {
    passive: true,
  }
);
