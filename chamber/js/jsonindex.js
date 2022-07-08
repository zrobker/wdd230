const requestURL = 'https://zrobker.github.io/wdd230/chamber/json/data.json';
const card = document.querySelector('.spotlightcard');

var filteredList = [];
var selected3 = [];

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    console.log(businesses);
    // Filter businesses
    filterList(businesses);
    console.log(filteredList);
    // Select random businesses
    random(filteredList);
    console.log(selected3);
    // Display businesses
    selected3.forEach(displayBusiness);

    // businesses.forEach(filterList);
});

function filterList(businesses) {
    for (let i = 0; i < businesses.length; i++) {
        if (businesses[i].membership == 'Silver' || businesses[i].membership == 'Gold') {
            filteredList.push(businesses[i]);
        }
    }
}


function random(filteredList) {
    var limit= 3;
    for (let i = 0; i < limit; i++) {
        let random_business = filteredList[Math.floor(Math.random() * filteredList.length)];
        if (random_business != selected3[0] && random_business != selected3[1]){
            selected3.push(random_business);
        } else {
            console.log(limit);
            limit += 1;
            console.log(limit);
        }
    }
} 
    
    




function displayBusiness(business) {
    let maindiv = document.createElement('div');
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let image = document.createElement('img');
    let div = document.createElement('div');
    let slogan = document.createElement('p');
    let ul = document.createElement('ul');
    let address = document.createElement('li');
    let phone = document.createElement('li');
    let website = document.createElement('a');

    name.innerHTML = business.name;
    image.innerHTML = business.imageurl;
    slogan.innerHTML = business.slogan;
    address.innerHTML = business.address;
    phone.innerHTML = business.phone;

    div.setAttribute('class', "spotlightinfo");
    div.append(slogan,ul,website);

    website.innerHTML = "Website";
    website.setAttribute('class', "button");
    image.setAttribute('class', 'spotlightimg');
    image.setAttribute('src', business.imageurl);
    image.setAttribute('alt', business.name);
    card.setAttribute('loading', 'lazy');
    website.setAttribute('href',business.weburl);
    ul.append(address,phone);
    ul.setAttribute('class','contactinfo');

    maindiv.setAttribute('class', "box");
    maindiv.append(name,image,div);


    // Add/append the section(card) with the h2 element
    card.appendChild(maindiv);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.spotlightcard').appendChild(card);
}