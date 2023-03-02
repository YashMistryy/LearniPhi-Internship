const customName = document.getElementById('customname');
// const story = document.querySelector('.story');
const story = document.getElementById("story")
const btn = document.getElementById("btn");
let str = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

btn.onclick = function(){
    let storyX = str;
    
    let itemx = randomValueFromArray(insertX);
    let itemy = randomValueFromArray(insertY);
    let itemz = randomValueFromArray(insertZ);

    storyX = storyX.replaceAll(":insertx:",itemx);
    storyX = storyX.replaceAll(":inserty:",itemy);
    storyX = storyX.replaceAll(":insertz:",itemz);

    let x = document.querySelector('input[name="ukus"]:checked').value;
    if(customName.value != ""){
        console.log(customName.value)
        storyX = storyX.replaceAll("Bob",customName.value)
    }
    if(x == "uk"){
        storyX = storyX.replaceAll("94 fahrenheit","34.4 celcius")
    }
    story.innerHTML = storyX;
    console.log(storyX)



}
if(document.getElementById('bin')){
    console.log("it works")
}