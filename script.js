const daysLeftOut = document.getElementById('daysLeft')

const timerEndDate = new Date("07-19-2024")

window.onload = function() {
    console.log('onload called')
    setTimeRemaining();
};

setInterval(function(){ 
    console.log('interval called')
    setTimeRemaining();  
}, 3600000);


function setTimeRemaining() {
    console.log('setTimeRemaining called');
    console.log(timerEndDate);
    let timeRemaining = timerEndDate.getTime() - new Date().getTime();
    console.log(timeRemaining);
    let daysRemaining = Math.round(timeRemaining / (1000 * 3600 * 24));
    console.log(daysRemaining);
    daysLeftOut.innerHTML = daysRemaining;
};
