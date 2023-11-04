function randomBubble() {
  var clutter = "";
  for (var i = 1; i <= 133; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 10;
function setTimer() {
  var timerint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over your score is ${score}</h1>`;
    }
  }, 1000);
}

var ra = 0;
function hitNumber() {
  ra = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = ra;
}

var score = 0;
function scoreval() {
  score = score + 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clicknum = Number(dets.target.textContent);
  if(clicknum === ra){
    scoreval();
    randomBubble();
    hitNumber();
  }
});

setTimer();
randomBubble();
hitNumber();
