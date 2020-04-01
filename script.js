const secondHand = document.querySelector(`.second-hand`);
const minuteHand = document.querySelector(`.minute-hand`);
const hourHand = document.querySelector(`.hour-hand`);

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secdeg = seconds/60*360 + 90;
    secondHand.style.transform = `rotate(${secdeg}deg)`;

    const mins = now.getMinutes();
    const mindeg = mins/60*360;
    minuteHand.style.transform = `rotate(${mindeg}deg)`;

    const hours = now.getHours();
    const hourdeg = hours/12*360;
    hourHand.style.transform = `rotate(${hourdeg}deg)`;

    console.log(seconds)
}

setInterval(setDate,1000)