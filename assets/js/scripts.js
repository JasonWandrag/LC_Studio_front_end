// let vid = document.getElementById("background-video");
// if (vid) {
// vid.playbackRate = 0.7;
// }

// Helper function to check if element is in view

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
