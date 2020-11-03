console.log('Hello from js/scripts.js!');
//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day. Bob then took :insertd:.";
let storyText2 = "Hello my name is Astronaut Bob. I am on my way to planet :insertY:. I have heard that the atmosphere will make me :insertz: because I will weigh 300  pounds. Luckily, my friend :insertx: will pick me up in their rocket ship and take me back so I can  take :insertd:.";


let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas', 'Thomas the Train'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House', 'Transylvania'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
let insertD = ['a long swig of whiskey', 'a long walk off a short pier', 'a much needed vacation'];
//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray (insertX);
  let yItem = randomValueFromArray (insertY);
  let zItem = randomValueFromArray (insertZ);
  let dItem = randomValueFromArray (insertD);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertd:',dItem);

if (customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("story2").checked) {
    let newStory = storyText2;
    newStory = newStory.replace('Bob',name);
  }
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.0714286) + 'stone';
    let temperature =  Math.round((94-32)*5/9) + 'celsius';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
