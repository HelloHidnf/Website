const anime = require('animejs');

let divs = [];
// let links = {
//     '#nav-button-1': '/',
//     '#nav-button-2': '/',
//     '#nav-button-3': '/',
//     '#nav-button-4': '/',
// }

let barAmount = Math.floor(document.body.clientWidth / 100);
let stripes = document.querySelector('.background-stripes');

for(let i = 0; i < barAmount; i++){
    let div = document.createElement('div');
    div.className = 'background-stripe';

    let subDiv1 = document.createElement('div');
    subDiv1.className = 'background-stripe-left';
    div.appendChild(subDiv1);

    if(new Date().getMonth() == 5){
        // THE GAY MODE!!!
        subDiv1.style.background = 'hsl('+ (i * ( 720 / barAmount )) +', 100%, 50%)'
        subDiv1.style.boxShadow = 'hsl('+ (i * ( 720 / barAmount )) +', 100%, 50%) 0 0 10px'
    }

    divs.push(div);
    stripes.appendChild(div);
}

window.onload = () => {
    anime.set('.background-stripe-left', { marginLeft: '50%', width: '100%' });
    anime.set('.background-stripes', { translateX: '-50%', translateY: '-50%', rotate: '90deg' });
    anime.set('.profile-image', { translateX: '100px', opacity: 0 });
    anime.set('.about-me', { translateY: '10px', opacity: 0 });
    anime.set('.profile-text', { translateY: '10px', opacity: 0 });
    anime.set('.socials', { rotate: '20deg', opacity: 0 });
    anime.set('.social', { translateY: '-10px', opacity: 0 });

    anime({
        targets: '.background-stripe-left',
        marginLeft: '0%',
        width: '50%',
        duration: 1000
    })

    anime({
        targets: '.background-stripes',
        rotate: '30deg',
        duration: 1000
    })

    anime({
        targets: '.about-me',
        translateY: '0',
        delay: 500,
        opacity: 1
    })

    anime({
        targets: '.profile-image',
        translateX: '0',
        delay: 700,
        opacity: 1
    })

    anime({
        targets: '.profile-text',
        translateY: '0',
        delay: 900,
        opacity: 1
    })

    anime({
        targets: '.socials',
        rotate: '0deg',
        delay: 1200,
        opacity: 1
    })

    anime({
        targets: '.social',
        delay: anime.stagger(100, { start: 1500 }),
        opacity: 1,
        translateY: '0'
    })
}

// Object.keys(links).forEach(key => {
//     let element = document.querySelector(key);
//     element.onclick = () => onlink(links[key]);
// })

// let onlink = ( url ) => {
//     anime({
//         targets: '.background-stripe-left',
//         marginLeft: '-150%',
//         width: '100%',
//         duration: 1000
//     })

//     anime({
//         targets: '.background-stripes',
//         rotate: '-90deg',
//         duration: 1500
//     })

//     setTimeout(() => {
//         window.location = url;
//     }, 600);
// }