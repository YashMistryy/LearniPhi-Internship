const div = document.getElementById("container");
const btn = document.getElementById("btn");

div.addEventListener("click",()=>{
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    div.style.backgroundColor = rndCol;
})
function random(h){
    return Math.ceil(Math.random()*h)
}
btn.addEventListener("click",(event)=>{
    event.stopPropagation();
    event.stopImmediatePropagation();
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    btn.style.backgroundColor = rndCol;
    console.log("executing listner 1's code")
})
btn.addEventListener("click",(event)=>{
    event.stopPropagation();
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    btn.style.backgroundColor = rndCol;
    console.log("executing listner 2's code")

})