let lastVisitDisplay = document.querySelector(".lastvisit");
let timestamp = Date.now();
let lastVisit = Number(window.localStorage.getItem("last_visit"));

if (lastVisit==0) {
    lastVisit = timestamp;
    lastVisitDisplay.textContent = 0;
} else {
    let x= convert_to_day(timestamp); 
    let y= convert_to_day(lastVisit); 

    // console.log(convert_to_day(timestamp));
    // console.log(convert_to_day(lastVisit));

    let difference = Math.round(x-y);
    // console.log(difference);
    lastVisitDisplay.textContent = difference;
}

localStorage.setItem("last_visit", timestamp);



function convert_to_day(timestamp) {
    const days = timestamp/8640000;
    return days;
}