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
// change color on spacebar press
document.body.onkeyup = function (e) {
  if (
    e.which == 32 &&
    e.target.tagName.toUpperCase() !== "INPUT" &&
    e.target.tagName.toUpperCase() !== "TEXTAREA"
  ) {
    changeColor(); // set body to random color
  }
};

document.body.onkeydown = function (e) {
  if (
    e.which == 32 &&
    e.target.tagName.toUpperCase() !== "INPUT" &&
    e.target.tagName.toUpperCase() !== "TEXTAREA"
  )
    e.preventDefault(); // Stop space bar from scrolling page
  if (e.which === 38) fullpage_api.moveSectionUp();
  if (e.which === 40) fullpage_api.moveSectionDown();
};
