const canvas = document.getElementById("fallingPeanuts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const peanuts = [];
const peanutImg = new Image();
peanutImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Peanut_%28kernel%29.jpg/120px-Peanut_%28kernel%29.jpg";

function createPeanut() {
  peanuts.push({
    x: Math.random() * canvas.width,
    y: -20,
    speed: 1 + Math.random() * 3,
    size: 20 + Math.random() * 20,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of peanuts) {
    p.y += p.speed;
    ctx.drawImage(peanutImg, p.x, p.y, p.size, p.size);
  }

  for (let i = peanuts.length - 1; i >= 0; i--) {
    if (peanuts[i].y > canvas.height) {
      peanuts.splice(i, 1);
    }
  }

  requestAnimationFrame(animate);
}

setInterval(createPeanut, 300);
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
