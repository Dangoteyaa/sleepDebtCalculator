// get userInput
//compare this against 8 hours of sleep which is the ideal number of hours of sleep one should have per night. 
// return the amount of sleep debt


const formScreen = document.getElementById("formScreen");
const resultScreen = document.getElementById("resultScreen");
const sleepDebtResult = document.getElementById("sleepDebtResult");
const formInput = document.getElementById("formInput");
const form = document.getElementById("theForm");
const button = document.getElementById("calculateButton");

button.addEventListener("click", calculateSleepDebt);

function calculateSleepDebt(e) {
    let message = ""
    e.preventDefault();
    const idealHours = 8;
    let userInput = Number(formInput.value); 
    let sleepDebt = idealHours - userInput;
    if(!userInput){
        alert ('⛔ Please enter the number of hours you slept last night');
    } else if (sleepDebt === 0) {
        message = `😴 You overslept by ${sleepDebt} hour(s).`;
        return;    
    } else {
        message = `⚠️ You're ${sleepDebt} hours short on sleep`;
        return;        
    }

        sleepDebtResult = message;

        formScreen.classList.remove('active');
        resultScreen.classList.add('active');
}











