const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const secounds = document.querySelector(".secounds");

setInterval(() => {
  const currentTime = new Date();
  hours.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minutes.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  secounds.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000); // update in 1s
