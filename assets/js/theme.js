// On page load set the theme.
(function () {
  let onpageLoad = localStorage.getItem("theme") || "";
  let element = document.getElementById("warna-1");
  let warna2 = document.getElementById("warna-2");
  element.classList.add(onpageLoad);
  warna2.classList.add(onpageLoad);
  document.getElementById("theme").textContent =
    localStorage.getItem("theme") || "light";
})();

function themeToggle() {
  let element = document.getElementById("warna-1");
  let warna2 = document.getElementById("warna-2");
  element.classList.toggle("pink");
  warna2.classList.toggle("blue-light");
  let theme = localStorage.getItem("theme");
  if (theme && theme === "pink") {
    localStorage.setItem("theme", "");
    localStorage.setItem()
  } else {
    localStorage.setItem("theme", "pink");
  }
  document.getElementById("theme").textContent = localStorage.getItem("theme");
}
