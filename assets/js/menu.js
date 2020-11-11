let redirectTo = (page, section) => {
  document.getElementById("toggler").checked = false;
  let url = `${location.protocol}//${location.host}${page}#${section}`;
  return (window.location = url);
};

let openSubMenu = (subMenu) => {
  let menu = document.getElementById(`${subMenu}-sub-menu`);
  let subMenuButtons = document.getElementsByClassName(`sub-menu`);
  let menuButton = document.getElementById(`${subMenu}-sub-menu-button`);
  Array.from(subMenuButtons, (button) => {
    button.classList.remove("active");
  });
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
    changeProjectColor();
    //the click was outside the specifiedElement, do something
  }
});

// Function to check if element is in view

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener(
  "wheel",
  function () {
    let menuArray = [
      "landing",
      "we-are",
      "services",
      "team",
      "probono",
      "hire",
      "contact",
    ];
    menuArray.map((menuItem) => {
      let elem = document.getElementById(menuItem);
      isInViewport(elem)
        ? document
            .querySelectorAll(`[buttonFor=${menuItem}]`)[0]
            .classList.add("active")
        : document
            .querySelectorAll(`[buttonFor=${menuItem}]`)[0]
            .classList.remove("active");
    });
    let probono = document.getElementById("probono-anchor");
    isInViewport(probono)
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
