// let str = "this is a long string"
// console.log(str)
// console.log(str.replaceAll(" ","   "))
// console.log(str.trim())
// console.log(str.split(" "))
// console.log(str.charAt(8))
// console.log(str.lastIndexOf('o'))
// console.log(str.substring(0,6))
let btn = document.getElementById('btn');
let fullName;
btn.onclick = ()=>{
    fullName = document.getElementById('fullName').value;
    fullName = fullName.trim();
    let firstName = fullName.slice(0,fullName.indexOf(" "));
    document.getElementById("firstName").innerHTML = document.getElementById("firstName").innerHTML+firstName;

    let lastName = fullName.slice(fullName.indexOf(" ")+1);

    document.getElementById("lastName").innerHTML = document.getElementById("lastName").innerHTML+lastName;

    
    
}
