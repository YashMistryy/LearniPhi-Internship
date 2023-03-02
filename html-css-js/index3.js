const theme = document.getElementById("theme");
const body = document.querySelector("body");
const btn = document.getElementById("btn");

theme.addEventListener("change",()=>{ if(theme.value == "black"){
    update("black","white")
 }else{
    update("white","black")
 }});
   


function update(bgColor, textColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
  }
//   let x = 69;
//   console.log(x.toString(2))

let arr = [1,2,53,4,47,47,8];

// let res = arr.map((x)=> x.toString(2))
// console.log(res)
// map function maps each element of array to a function and change each value according to that element

// filter function filter each element of array to a condition
 function isEven(x){if(x%2==0){ return x} else return   }
let res = arr.filter(isEven)
console.log(res)

