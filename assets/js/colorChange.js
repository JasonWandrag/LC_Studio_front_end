// function to choose random color, as long as it has not been chosen before
let classNameList = ["red", "yellow", "blue"];
let chooseColor = () => {
  classNameList.push(classNameList.shift()); // push first item in array to end of array
  return classNameList[0]; // pick first item in array
};

// Spacebar functionality
let changeColor = () => {
  document.getElementsByTagName("body")[0].className = chooseColor();
};
document.body.onkeydown = function (e) {
  if (e.which == 32 && e.target == document.body) {
    e.preventDefault(); // Prevent SPACEBAR moving page when pressed down
  }
};
// change color on spacebar press
document.body.onkeyup = function (e) {
  // console.log("helllo");
  if (e.which == 32 && e.target.tagName.toUpperCase() !== "INPUT") {
    changeColor(); // set body to random color
  }
};
// change color when swiping
// document.body.addEventListener(
//   "touchend",
//   function touchMoveEvent(event) {
//     console.log(event);
//     let x = event.changedTouches[0].clientX;
//     if (x > 0) {
//       document.getElementsByTagName("body")[0].className = chooseColor();
//     }
//   },
//   false
// );
window.addEventListener("load", function () {
  document.getElementsByTagName("body")[0].className = "red";
});
