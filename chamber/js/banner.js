const bannerContent = document.querySelector('.banner');
let content = document.createElement('h2');
content.innerHTML = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';

if (bannerContent != null) {
    if ((now.getDay() != 1) && (now.getDay() != 2)) {
        bannerContent.innerHTML = "";
    } else {
        bannerContent.appendChild(content);
        document.querySelector('span.banner').appendChild(content);
    };
} 