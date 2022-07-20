const requestURL = 'https://zrobker.github.io/wdd230/final/json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });

function displayTemples(temple) {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let image = document.createElement('img');
    let history = document.createElement('p');
    let ul = document.createElement('ul');
    let address = document.createElement('li');
    let phone = document.createElement('li');
    let email = document.createElement('li');
    let services = document.createElement('li');
    let ordinance = document.createElement('li');
    let session = document.createElement('li');
    let closure = document.createElement('li');

    name.innerHTML = temple.name;
    image.innerHTML = temple.imageurl;
    history.innerHTML = temple.history;
    address.innerHTML = temple.address;
    phone.innerHTML = temple.phone;
    email.innerHTML = temple.email;
    services.innerHTML = temple.services;
    ordinance.innerHTML = temple.ordinance;
    session.innerHTML = temple.session;
    closure.innerHTML = temple.closure;

    image.setAttribute('src', temple.imageurl);
    image.setAttribute('alt', temple.name);
    card.setAttribute('loading', 'lazy');
    ul.append(address,phone,email,services,ordinance,session,closure)

    // Add/append the section(card) with the h2 element
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(history);
    card.appendChild(ul);
    

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}