var musik = document.getElementById("musik");
var icon = document.getElementById("icon");
// Creating a function that will change
// pause to play and vice-versa
icon.onclick = function () {
  if (musik.paused) {
    // If paused then play the
    // music and change the image
    musik.play();
    icon.src =
      "https://media.geeksforgeeks.org/wp-content/uploads/20210402235545/Pause.png";
  } else {
    // If playing then pause the
    // music and change the image
    musik.pause();
    icon.src =
      "https://media.geeksforgeeks.org/wp-content/uploads/20210402235520/play.png";
  }
};
