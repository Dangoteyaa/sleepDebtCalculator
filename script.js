// get userInput
//compare this against 8 hours of sleep which is the ideal number of hours of sleep one should have per night. 
// return the amount of sleep debt

const btn = document.getElementById("btn");
let userInputEl = document.querySelector("input");

const formScreen = document.getElementById("formScreen");
const resultScreen = document.getElementById("resultScreen");
const sleepDebtResult = document.getElementById("sleepDebtResult");
const formInput = document.getElementById("formInput");
const form = document.getElementById("theForm");

document.getElementById("button").addEventListener("submit", calculateSleepDebt);

function calculateSleepDebt () {
    e.preventDefault();
    const idealHours = 8;
    let userInput = formInput.value;
    let sleepDebt = idealHours - userInput;
    if(!userInput){
        alert ('please enter the number of hours you slept last night');
    }
    if (userInput){
       if (sleepDebt === 0) {
        sleepDebtResult.textContent = "Congratulations you don't have any sleep debt!";
        formScreen.classList.remove('active');
        resultScreen.classList.add('active');
     } else {
        sleepDebtResult.textContent = `your sleep debt is ${sleepDebt} hours`;
        formScreen.classList.remove('active');
        resultScreen.classList.add('active');
    }
   
}

}




