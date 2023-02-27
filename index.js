// // let myName;
// // document.getElementById("btn").onclick = function(){
// //     myName = document.getElementById("input-name").value;
// //     console.log("is this your name : ",myName," ?")
// // }
// // let age = Number(window.prompt("how old are you?"));
// // console.log("you are ",69-age," years closer to the grave!")
// // let x = 5.191242;
// // console.log(Math.round(x))

// let x = Math.floor(Math.random() * 100) + 1;
// console.log(x)
// let y;
// let count = 0;

// document.getElementById("btnSubmit").onclick = function(){
//     y = Number(document.getElementById("guessNumber").value);
//     if(x == y){
//         document.getElementById("result").innerHTML = "you guessed correct :)";
//         count+=1;
//         document.getElementById("prev-guesses").innerHTML = document.getElementById("prev-guesses").innerHTML+y+" ";
//     document.getElementById("counts").innerHTML = " total counts"+count;
//         resetGame();
//         document.getElementById("result").style.backgroundColor= "#90ee90"
//         document.getElementById("btnSubmit").disabled = true;
//         console.log("btn should be disabled!")
//     }else if(x>y){
//         document.getElementById("result").innerHTML = "you guessed very Low , try something higher!";
//         document.getElementById("result").style.backgroundColor= "#ffccbb";
//         count+=1;
//         document.getElementById("prev-guesses").innerHTML = document.getElementById("prev-guesses").innerHTML+y+" ";
//     document.getElementById("counts").innerHTML = " total counts"+count;

//     }else {
//         document.getElementById("result").innerHTML = "you guessed very high , try something lower!";
//         document.getElementById("result").style.backgroundColor= "#ffccbb";
//         count+=1;
//         document.getElementById("prev-guesses").innerHTML = document.getElementById("prev-guesses").innerHTML+y+" ";
//     document.getElementById("counts").innerHTML = " total counts"+count;

//     }
    
// }
// function resetGame(){
//     count = 0;

// }
function show(stuff){
    console.log(stuff)
}
// // document.getElementById("btnSubmit").onclick = ()=>{
// //     if(document.getElementById("myCheckbox").checked){
// //         window.alert("hooray you are a robot")
// //     }else{
// //         window.alert("Sorry you are just a lame human!")
// //     }



// // }
// // let str = "i can acheive anything"
// // show(str.charAt(0).toUpperCase()+str.slice(1))
// // const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
// // let res = [];
// // for(let city of cities){
// //     let cityx = city.charAt(0).toUpperCase()+city.slice(1).toLowerCase();
// //     res.push(cityx)
    
// // }

// // show(res)

// const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                   'GNF576746573fhdg4737dh4;Greenfield',
//                   'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                   'SYB4f65hf75f736463;Stalybridge',
//                   'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
// // goal is to extract substring as MAN Manchester Piccadilly

// const ul = document.getElementById("ul")

// for(let stn of stations){
//     let stationx = stn.substring(0,3)+" "+stn.slice(stn.indexOf(";")+1);
    
//     let li = document.createElement("li");
//     li.innerHTML = stationx;
//     ul.appendChild(li)

// }
// let ul = document.getElementById("ul");
// let str1 = str.substring(0,3)
// let str2 = str.slice(str.indexOf(";")+1)
// show(str1+" "+str2)
// li = document.createElement("li");
// li.innerHTML = str1;
// ul.appendChild(li)