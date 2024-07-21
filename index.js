const hourE1 = document.getElementById("Hours");
const minutesE1 = document.getElementById("Minutes");
const secondsE1 = document.getElementById("Seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  let ampm = "AM";

  if (h >= 12) {
    ampm = "PM";
    if (h > 12) {
      h = h - 12;
    }
  }

  if (h === 0) {
    h = 12;
  }

  const formattedH = h < 10 ? "0" + h : h;
  const formattedM = m < 10 ? "0" + m : m;
  const formattedS = s < 10 ? "0" + s : s;

  hourE1.innerText = formattedH;
  minutesE1.innerText = formattedM;
  secondsE1.innerText = formattedS;
  ampmE1.innerText = ampm;
}

setInterval(updateClock, 1000);
updateClock();
