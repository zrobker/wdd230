window.onload = get_year();
window.onload = get_date();
window.onload = get_day_month_year();


function get_date() {
    var LastModif = new Date(document.lastModified);
    console.log(LastModif);
    document.getElementById("date").innerHTML = LastModif;
}

function get_date2() {
    var LastModif = new Date(document.lastModified);
    console.log(LastModif);
    document.getElementById("date2").innerHTML = LastModif;
}

function get_year() {
    var date =  new Date().getFullYear();
    console.log(date);
    document.querySelector("#year").innerHTML = date;
}

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function get_day_month_year() {
    const datefield = document.querySelector(".date");
    const datefieldUK = document.querySelector("aside");
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now
    );
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(now);
    datefield.innerHTML = `<em>${fulldate}</em>`;
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

listbutton.addEventListener("click", showList);
gridbutton.addEventListener("click", showGrid);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
function showGrid() {
	display.classList.add("grid");
	display.classList.remove("list");
}


