const lastVisitDisplay = document.querySelector(".lastvisit");
var timestamp = Date.now();
var lastVisit = Number(window.localStorage.getItem("last_visit"));

if (lastVisit != null) {
    lastVisit = timestamp;
    lastVisitDisplay.textContent = 0;
} else {
    let days= convert_to_day(timestamp,lastVisit); 
    lastVisitDisplay.textContent = days;
}

localStorage.setItem("last_visit", timestamp);



function convert_to_day(timestamp,lastVisit) {
    const days = ((((timestamp-lastVisit)/1000)/3600)/24).toFixed(0);
    return days;
}