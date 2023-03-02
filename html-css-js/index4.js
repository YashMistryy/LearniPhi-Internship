const para = document.getElementById('para');
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  });
function random(h){
    return Math.ceil(Math.random()*h)
}