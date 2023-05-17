// special countdown
let daysItem = document.querySelector("#days");
let hourItem = document.querySelector("#hour");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let CountDown = () => {
  let futureDate = new Date("30 june 2023");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;

  let days = Math.floor(myDate / 3000 / 60 / 60 / 24);
  let hour = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  daysItem.innerHTML = days;
  hourItem.innerHTML = hour;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
};
CountDown();

setInterval(CountDown, 1000);

// scroll back to top
function scrolltopback() {
  let scrollTopButton = document.querySelector("#scrollup");
  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 250) {
      scrollTopButton.classList.add("scrollActive");
    } else {
      scrollTopButton.classList.remove("scrollActive");
    }
  };
}
scrolltopback();

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navcollapse.classList.remove("show");
  });
});
