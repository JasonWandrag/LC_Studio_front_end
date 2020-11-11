let vid = document.getElementById("background-video");
if (vid) {
  vid.playbackRate = 0.7;
}

// change color of start project button when menu opens
let changeProjectColor = () => {
  if (document.getElementById("toggler").checked) {
    document.getElementsByClassName("modal-open-button")[0].style.transform =
      "translate(400%)";
  } else {
    document.getElementsByClassName("modal-open-button")[0].style.transform =
      "translate(0)";
  }
};
