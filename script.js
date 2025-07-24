// get userInput
//compare this against 8 hours of sleep which is the ideal number of hours of sleep one should have per night. 
// return the amount of sleep debt


const formScreen = document.getElementById("formScreen");
const resultScreen = document.getElementById("resultScreen");
const sleepDebtResult = document.getElementById("sleepDebtResult");
const formInput = document.getElementById("formInput");
const button = document.getElementById("calculateButton");

button.addEventListener("click", calculateSleepDebt);

function calculateSleepDebt(e) {
    let message = ""
    e.preventDefault();
    const idealHours = 8;
    let userInput = Number(formInput.value); 
    let sleepDebt = idealHours - userInput;
   
    if(!userInput && userInput !== 0){
        alert ('⛔ Please enter the number of hours you slept last night');
        return;
    } else if (sleepDebt === 0 ) {
        message = "Congrats! You've had enough sleep! 🎉";
    } else if (sleepDebt === 1) {
        message = "⚠️ You're an hour short on sleep";        
    }
    else if (userInput < 8) {
        message = `⚠️ You're ${sleepDebt} hours short on sleep`;
        
    } else if (sleepDebt < 0) {
        message = `😴 You overslept by ${Math.abs(sleepDebt)} hours`;       
    }

        sleepDebtResult.textContent = message;

        formScreen.classList.remove('active');
        resultScreen.classList.add('active');
}

//logic for go back button

function goBack(){
    formScreen.classList.add('active');
    resultScreen.classList.remove('active');
    formInput.value = "";
}
 










