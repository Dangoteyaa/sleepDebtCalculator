// get userInput
//compare this against 8 hours of sleep which is the ideal number of hours of sleep one should have per night. 
// return the amount of sleep debt

const btn = document.querySelector("button");
let userInputEl = document.querySelector("input");

document.getElementById("button").addEventListener("submit", calculateSleepDebt);

function calculateSleepDebt () {
    let idealHours = 8;
    let userInput = userInputEl.value
    let sleepDebt = idealHours - userInput;
    if(!userInput){
        alert ('please enter the number of hours you slept last night');
    }
    if (sleepDebt === 0) {
        return document.getElementsById("heading").textContent = "Congratulations you don't have any sleep debt!";
     } else {
        return document.getElementsById("heading").textContent = `your sleep debt is ${sleepDebt} hours`;
       
    }

}




