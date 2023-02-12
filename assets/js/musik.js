var musik = document.getElementById("musik");
var icon = document.getElementById("icon");
musik.loop = true;
// Creating a function that will change
// pause to play and vice-versa
icon.onclick = function () {
  if (musik.paused) {
    // If paused then play the
    // music and change the image
    musik.play();
    icon.innerHTML = `<i class="fa-solid fa-pause"> </i><marquee>Tulus - Teman Hidup</marquee>`;
    icon.style.width = "100px";
    icon.style.justifyContent = "center"
    icon.style.transition= "0.5s all"
    //  icon.src = "nama file gambar";
  } else {
    // If playing then pause the
    // music and change the image
    musik.pause();
    icon.innerHTML = `<i class="fa-solid fa-play"></i>`;
    icon.style.width = "40px";
    icon.style.justifyContent = "left"
    icon.style.paddingLeft="4px"
  }
};
