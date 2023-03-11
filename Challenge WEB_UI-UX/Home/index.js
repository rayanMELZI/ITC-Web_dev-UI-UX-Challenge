document.querySelector("#firstEd").addEventListener("click", () => {
  document.querySelector(".first").classList.add("PActive");
  document.querySelector(".main").classList.add("BActive");
});
document.querySelector("#secondEd").addEventListener("click", () => {
  document.querySelector(".second").classList.add("PActive");
  document.querySelector(".main").classList.add("BActive");
});
document.querySelector("#thirdEd").addEventListener("click", () => {
  document.querySelector(".third").classList.add("PActive");
  document.querySelector(".main").classList.add("BActive");
});

//pressing on X
document.querySelector(".bi-x-lg").addEventListener("click", () => {
  document.querySelector(".img-popup").classList.remove("PActive");
  document.querySelector(".main").classList.remove("BActive");
});

const up = document.querySelector(".up");

window.document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 54) {
    up.style.visibility = "visible";
  } else {
    up.style.visibility = "hidden";
  }
});

// Set the date we're counting down to
var countDownDate = new Date("March 15, 2023 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate the days, hours, minutes and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Display the result in the HTML elements
  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  // If the countdown is over, show a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
