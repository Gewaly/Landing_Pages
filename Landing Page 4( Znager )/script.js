let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let znager = document.querySelector(".znager");
let main = document.querySelector(".main");
window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  boat.style.top = value + "px";
  znager.style.fontSize = value + "px";
  if (value >= 67) {
    znager.style.fontSize = 67 + "px";
    znager.style.position = "fixed";
    if (value >= 478) {
      znager.style.display = "none";
    } else {
      znager.style.display = "block";
    }
    if (value >= 127) {
      main.style.background = "linear-gradient(#376281,#10001f)";
    } else {
      main.style.background = "linear-gradient(rgb(72, 1, 65),rgb(25, 0, 40))";
    }
  }
};
