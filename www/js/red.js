'use strict';

const buttons = document.querySelectorAll('button');

const audio = document.createElement('audio');
audio.setAttribute('src', '');

const header = document.querySelector('header');
const text = document.createElement('p');
text.textContent = '';
text.setAttribute('class', 'state');
header.appendChild(text);

const handleClick = e => {
    const button = e.target;
    const strong = button.previousElementSibling;
    const p = strong.parentElement;
    const li = p.parentElement;
    const img1 = li.firstElementChild;
    const img2 = img1.nextElementSibling;
    const img3 = img2.nextElementSibling;

    if (!strong.hasAttribute('data-count')) {
        strong.setAttribute('data-count', 5);
    }

    const updateCount = Number(strong.getAttribute('data-count')) + 1;

    strong.textContent = `Level ${updateCount}`;

    strong.setAttribute('data-count', updateCount);

    if (updateCount >= 16 && !img2.style.visibility) {

        img1.className = 'evol';
        img2.className = 'evol2';

        for (const button of buttons) {
            button.setAttribute('disabled', true);
        }

        audio.src = '/audio/evol.mp4';
        audio.setAttribute('autoplay', true);
        text.textContent = `What? ${img1.id} is evolving!`;

        const cancel = document.createElement('button');
        cancel.setAttribute('class', 'cancel');
        p.appendChild(cancel);

        const handleCancel = e => {
            if (li.id === 'charmander') {
                img1.className = 'Charmander';
                img2.className = 'Charmeleon';
            }
            if (li.id === 'squirtle') {
                img1.className = 'Squirtle';
                img2.className = 'Wartotle';
            }
            if (li.id === 'bulbasaur') {
                img1.className = 'Bulbasaur';
                img2.className = 'Ivysaur'
            }

            for (const button of buttons) {
                button.removeAttribute('disabled');
            }
            audio.src = '';
            p.removeChild(cancel);
            clearTimeout(timer);
            text.textContent = 'You canceled the evolution! You are heartless!'
        }

        cancel.addEventListener('click', handleCancel);

        const timer = setTimeout(function () {
            if (li.id === 'charmander') {
                img1.className = 'Charmander';
                img1.style.visibility = 'hidden';
                img1.style.position = 'absolute';
                img2.className = 'Charmeleon';
                img2.style.visibility = 'visible';
                img2.style.position = 'relative';
            }
            if (li.id === 'squirtle') {
                img1.className = 'Squirtle';
                img1.style.visibility = 'hidden';
                img1.style.position = 'absolute';
                img2.className = 'Wartotle';
                img2.style.visibility = 'visible';
                img2.style.position = 'relative';
            }
            if (li.id === 'bulbasaur') {
                img1.className = 'Bulbasaur';
                img1.style.visibility = 'hidden';
                img1.style.position = 'absolute';
                img2.className = 'Ivysaur';
                img2.style.visibility = 'visible';
                img2.style.position = 'relative';
            }

            for (const button of buttons) {
                button.removeAttribute('disabled');
            };

            text.textContent = `Congratulations! ${img1.id} evolved into ${img2.id}!`;
            audio.src = '/audio/evolComplete.mp4';
            audio.setAttribute('autoplay', true);
            p.removeChild(cancel);

        }, 11000);
    }

    if (updateCount >= 36 && img2.style.visibility === 'visible' && !img3.style.visibility) {

        img2.className = 'evol';
        img3.className = 'evol2';

        for (const button of buttons) {
            button.setAttribute('disabled', true);
        }

        audio.src = '/audio/evol.mp4';
        audio.setAttribute('autoplay', true);
        text.textContent = `What? ${img2.id} is evolving!`;

        const cancel2 = document.createElement('button');
        cancel2.setAttribute('class', 'cancel');
        p.appendChild(cancel2);

        const handleCancel2 = e => {
            if (li.id === 'charmander') {
                img2.className = 'Charmeleon';
                img3.className = 'Charizard';
            }
            if (li.id === 'squirtle') {
                img2.className = 'Wartotle';
                img3.className = 'Blastoise';
            }
            if (li.id === 'bulbasaur') {
                img2.className = 'Ivysaur';
                img3.className = 'Venusaur';
            }

            for (const button of buttons) {
                if (updateCount < 100) {
                    button.removeAttribute('disabled');
                }
            }
            audio.src = '';
            p.removeChild(cancel2);
            clearTimeout(timer2);
            text.textContent = 'You canceled the evolution! You are heartless!'
        }

        cancel2.addEventListener('click', handleCancel2);

        const timer2 = setTimeout(function () {
            if (li.id === 'charmander') {
                img2.className = 'Charmeleon'
                img2.style.visibility = 'hidden';
                img3.className = 'Charizard';
                img3.style.visibility = 'visible';
            }
            if (li.id === 'squirtle') {
                img2.className = 'Wartotle';
                img2.style.visibility = 'hidden';
                img3.className = 'Blastoise';
                img3.style.visibility = 'visible';
            }
            if (li.id === 'bulbasaur') {
                img2.className = 'Ivysaur';
                img2.style.visibility = 'hidden';
                img3.className = 'Venusaur';
                img3.style.visibility = 'visible';
            }

            for (const button of buttons) {
                if (updateCount < 100) {
                    button.removeAttribute('disabled');
                }
            }

            text.textContent = `Congratulations! ${img2.id} evolved into ${img3.id}!`;
            audio.src = '/audio/evolComplete.mp4';
            audio.setAttribute('autoplay', true);
            p.removeChild(cancel2);

        }, 11000);
    }

    if (updateCount === 100) {
        p.removeChild(button);
    }
}

for (const button of buttons) {
    button.addEventListener('click', handleClick);
}