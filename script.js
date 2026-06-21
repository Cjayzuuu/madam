const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

/* No Button Runs Away */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 80);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* Yes Button */
yesBtn.addEventListener("click", () => {
  music.play();

  message.innerHTML = " I KNEW IT! ❤️";

  for (let i = 0; i < 100; i++) {
    createHeartFirework();
  }

  setTimeout(() => {
    document.getElementById("loveScreen").classList.add("show");

    setInterval(() => {
      createBlackHeartFirework();
    }, 200);
  }, 3000);
});

/* Pink Screen Fireworks */
function createHeartFirework() {
  const heart = document.createElement("div");

  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = window.innerWidth / 2 + "px";
  heart.style.top = window.innerHeight / 2 + "px";

  heart.style.setProperty("--x", Math.random() * 1000 - 500 + "px");

  heart.style.setProperty("--y", Math.random() * 1000 - 500 + "px");

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}

/* Final Black Screen Fireworks */
function createBlackHeartFirework() {
  const heart = document.createElement("div");

  heart.classList.add("blackHeart");
  heart.innerHTML = "❤️";

  heart.style.left = window.innerWidth / 2 + "px";
  heart.style.top = window.innerHeight / 2 + "px";

  heart.style.setProperty("--x", Math.random() * 1500 - 750 + "px");

  heart.style.setProperty("--y", Math.random() * 1500 - 750 + "px");

  document.getElementById("loveScreen").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

/* Floating Hearts */
setInterval(() => {
  const heart = document.createElement("div");

  heart.classList.add("floating-heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}, 500);

/* Falling Roses */
setInterval(() => {
  const rose = document.createElement("div");

  rose.classList.add("rose");
  rose.innerHTML = "🌹";

  rose.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(rose);

  setTimeout(() => {
    rose.remove();
  }, 8000);
}, 700);

/* Sparkles */
setInterval(() => {
  const sparkle = document.createElement("div");

  sparkle.classList.add("sparkle");
  sparkle.innerHTML = "✨";

  sparkle.style.left = Math.random() * window.innerWidth + "px";

  sparkle.style.top = Math.random() * window.innerHeight + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 2000);
}, 300);
