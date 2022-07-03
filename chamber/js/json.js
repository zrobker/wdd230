const requestURL = 'https://zrobker.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusiness);
  });

function displayBusiness(business) {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let image = document.createElement('img');
    let since = document.createElement('p');
    let ul = document.createElement('ul');
    let address = document.createElement('li');
    let phone = document.createElement('li');
    let membership = document.createElement('li');
    let website = document.createElement('a');

    name.innerHTML = business.name;
    image.innerHTML = business.imageurl;
    since.innerHTML = business.since;
    address.innerHTML = business.address;
    phone.innerHTML = business.phone;
    membership.innerHTML = business.membership;

    website.innerHTML = "Website";
    website.setAttribute('class', "button");
    image.setAttribute('src', business.imageurl);
    image.setAttribute('alt', business.name);
    card.setAttribute('loading', 'lazy');
    website.setAttribute('href',business.weburl);
    ul.append(address,phone,membership)

    // Add/append the section(card) with the h2 element
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(since);
    card.appendChild(ul);
    card.appendChild(website);
    

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}