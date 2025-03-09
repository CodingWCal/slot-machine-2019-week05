//PSEUDOCODE START: FRI 3/7/25 CLASS PRACTICE
//min bet click button
//event listener that calls minbet function

//starting amount $2000
//let balance = 2000

//write min bet function
    //decrease min bet $50
    //balance = balance - 50
    //result
    //math.random()*5
        //option1 = math.random() * 5
        //option2 = math.random() * 5
        //option3 = math.random() * 5
    //display results
    //Create HTML for each option, Add your 3 options in DOM

    //document.querySelector('#elementID').innerText = option1
    //document.querySelector('option1').innerText = option2
    //document.querySelector('option1').innerText = option3
    // display if they win or lose
    //we know if they win when option1 === option2 === option3
    //increase balance by $500
    //create HTML for display result
    //display you win!
    //else condition
    //display 'message'


//max bet click button

//win times multiplier of 10
//total balance += $500 from $50 * 10
//if at loss they lose $5

//subtract max bet amount $500

//guidelines to think of when starting pesudocode!
//what can they do?
//what do they expect?
//what do they see?

const minimumBet = 50;
const maximumBet = 100;
let balance = 2000;

console.log(document.querySelector('#minimumBet'));
console.log(document.querySelector('#maximumBet'));
console.log(document.querySelector('#balance'));

document.querySelector('#minimumBet').addEventListener('click', runMinimum );
document.querySelector('#maximumBet').addEventListener('click', runMaximum);

function runMinimum(){
    let option1 = Math.floor(Math.random(5)*(5)); 
    let option2 = Math.floor(Math.random(5)*(5)); 
    let option3 = Math.floor(Math.random(5)*(5));
    document.getElementById('option1').innerHTML = option1;
    document.getElementById('option2').innerHTML = option2;
    document.getElementById('option3').innerHTML = option3;
    if(option1 === option2 === option3){
        balance =  (balance += (minimumBet * 10))
        document.querySelector('#balance').innerHTML = balance;
    	document.querySelector('msg').innerText = "Guess, you're a winna winna chicken dinna";
    }else{
        balance = balance - minimumBet
        document.querySelector('#balance').innerHTML = balance;
    	document.querySelector('msg').innerText = "Your Loss Our Gain!";
    }

}

function runMaximum(){
    let option1 = Math.floor(Math.random(5)*(5)); 
    let option2 = Math.floor(Math.random(5)*(5)); 
    let option3 = Math.floor(Math.random(5)*(5));
    document.getElementById('option1').innerHTML = option1;
    document.getElementById('option2').innerHTML = option2;
    document.getElementById('option3').innerHTML = option3;
    if(option1 === option2 === option3){
        balance =  (balance += (maximumBet * 15))
        document.querySelector('#balance').innerHTML = balance;
    	document.querySelector('msg').innerText = "Guess, you're a winna winna chicken dinna";
    }else{
        balance = balance - maximumBet
        document.querySelector('#balance').innerHTML = balance;
    	document.querySelector('msg').innerText = "Your Loss Our Gain!";
    }
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}

//offsets so each reel delays to the next in order
//create equation for every possible combo, 9 icons times ()
//function to roll all reels at once
//players start off with $1000 total amount
//DO MATH RANDOM 3 Times
//MAKE CONDITIONAL IF WINNING OR NOT
//CHECK IT 




//document.getElementById('minimumBet').onclick=runMinimum;
//function runMinimum(){
//    var option1 = getRandomNum();
//}

//function getRandomNum(){
  //  var randomNumber = Math.random();
    //var
//}

//function getRandom() {
  //  return Math.random();
  //}

  //function getRandom() {
    //return Math.random();
  //}

  //function getRandom() {
    //return Math.random();
  //}










































/*const iconWidth = 79,
      iconHeight = 79,
      numIcons = 9,
      time_per_icons = 100,
      indexes = [0, 0, 0];

const roll = (reel, offset = 0) => {
    const delta = (offset + 2) * numIcons + Math.round(Math.random() * numIcons)
    const style = getComputedStyle(reel),
        backgroundPositionY * parseFloat=(style["background-position-y"]);
            
        reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms`;
        reel.style.backgroundPositionY = `${backgroundPositionY + delta * iconHeight}px`;
}; 

function rollAllReels(){
    const reelsList = document.querySelector('.slots > .reel');
    [...reelsList].map((reel, i) => {
        console.log(reel, i);
        roll(reel, i);
    })
}

rollAllReels(); */

