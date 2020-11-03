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
