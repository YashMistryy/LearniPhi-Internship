// let myName;
// document.getElementById("btn").onclick = function(){
//     myName = document.getElementById("input-name").value;
//     console.log("is this your name : ",myName," ?")
// }
// let age = Number(window.prompt("how old are you?"));
// console.log("you are ",69-age," years closer to the grave!")
// let x = 5.191242;
// console.log(Math.round(x))

let x = Math.floor(Math.random() * 100) + 1;
console.log(x)
let y;
let count = 0;

document.getElementById("btnSubmit").onclick = function(){
    y = Number(document.getElementById("guessNumber").value);
    if(x == y){
        document.getElementById("result").innerHTML = "you guessed correct :)";
        count+=1;
        document.getElementById("prev-guesses").innerHTML = document.getElementById("prev-guesses").innerHTML+y+" ";
    document.getElementById("counts").innerHTML = " total counts"+count;
        resetGame();
        document.getElementById("btnSubmit").disabled = true;
        console.log("btn should be disabled!")
    }else if(x>y){
        document.getElementById("result").innerHTML = "you guessed very Low , try something higher!";
        count+=1;
        document.getElementById("prev-guesses").innerHTML = document.getElementById("prev-guesses").innerHTML+y+" ";
    document.getElementById("counts").innerHTML = " total counts"+count;

    }else {
        document.getElementById("result").innerHTML = "you guessed very high , try something lower!"
        count+=1;
        document.getElementById("prev-guesses").innerHTML = document.getElementById("prev-guesses").innerHTML+y+" ";
    document.getElementById("counts").innerHTML = " total counts"+count;

    }
    
}
function resetGame(){
    count = 0;

}