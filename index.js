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
        document.getElementById("result").style.backgroundColor= "#90ee90"
        document.getElementById("btnSubmit").disabled = true;
        console.log("btn should be disabled!")
    }else if(x>y){
        document.getElementById("result").innerHTML = "you guessed very Low , try something higher!";
        document.getElementById("result").style.backgroundColor= "#ffccbb";
        count+=1;
        document.getElementById("prev-guesses").innerHTML = document.getElementById("prev-guesses").innerHTML+y+" ";
    document.getElementById("counts").innerHTML = " total counts"+count;

    }else {
        document.getElementById("result").innerHTML = "you guessed very high , try something lower!";
        document.getElementById("result").style.backgroundColor= "#ffccbb";
        count+=1;
        document.getElementById("prev-guesses").innerHTML = document.getElementById("prev-guesses").innerHTML+y+" ";
    document.getElementById("counts").innerHTML = " total counts"+count;

    }
    
}
function resetGame(){
    count = 0;

}
function show(stuff){
    console.log(stuff)
}
// document.getElementById("btnSubmit").onclick = ()=>{
//     if(document.getElementById("myCheckbox").checked){
//         window.alert("hooray you are a robot")
//     }else{
//         window.alert("Sorry you are just a lame human!")
//     }



// }
// let str = "i can acheive anything"
// show(str.charAt(0).toUpperCase()+str.slice(1))

