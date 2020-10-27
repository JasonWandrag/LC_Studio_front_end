filterSelection("all"); // Execute the function and show all columns

// Filter selection
function filterSelection(selection) {
  let items = document.getElementsByClassName("gallery-item");
  if (selection == "all") selection = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (let i = 0; i < items.length; i++) {
    removeClassFromElement(items[i], "show");
    if (items[i].className.indexOf(selection) > -1)
      addClassToElement(items[i], "show");
  }
}

// Show filtered elements
function addClassToElement(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClassFromElement(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("gallery-buttons-container");
let btns = btnContainer.getElementsByClassName("gallery-button");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("gallery-button active");
    current[0].className = current[0].className.replace(" active", "");
    // current[0].className = current[0].classList.remove("active");
    this.className += " active";
    // this.classList.add("active");
  });
}
