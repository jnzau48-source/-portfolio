/* MATRIX BACKGROUND */

const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];

for(let i = 0; i < columns; i++){
  drops[i] = 1;
}

function drawMatrix(){

  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#00ff88";
  ctx.font = fontSize + "px monospace";

  for(let i = 0; i < drops.length; i++){

    const text = letters[Math.floor(Math.random()*letters.length)];

    ctx.fillText(text, i*fontSize, drops[i]*fontSize);

    if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 40);

/* PANEL SYSTEM */

const panels = document.querySelectorAll(".panel");

let current = 0;

function showPanel(index){

  panels.forEach(p => p.classList.remove("active"));
  panels[index].classList.add("active");

  const logo = document.getElementById("far-wall-logo");

  logo.style.opacity = 0.15 + index * 0.05;
}

/* INIT FIRST PANEL */

showPanel(current);

/* SCROLL CONTROL */

let lock = false;

window.addEventListener("wheel", e => {

  if(lock) return;
  lock = true;

  if(e.deltaY > 0){
    current++;
    if(current >= panels.length) current = 0;
  } else {
    current--;
    if(current < 0) current = panels.length - 1;
  }

  showPanel(current);

  setTimeout(() => lock = false, 600);
});

/* WHATSAPP */

const btn = document.getElementById("whatsapp-btn");

if(btn){
  btn.addEventListener("click", () => {
    window.open("https://wa.me/254XXXXXXXXX", "_blank");
  });
}

/* RESIZE */

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
