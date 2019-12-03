'use strict';

const button = document.querySelector('button.start');
const header = document.querySelector('header');
const text = document.querySelector('p');
const imgs1 = document.querySelectorAll('header nav ul li img:first-child');
const imgs2 = document.querySelectorAll('header nav ul li img:last-child');

const audio = document.createElement('audio');
audio.setAttribute('src', '');

const handleClick = e => {
    const button = e.target;
    const cancel = button.previousElementSibling;
    const cancel2 = button.nextElementSibling;
    const section = button.parentElement;
    const aside = section.nextElementSibling;
    const nav = section.previousElementSibling;
    const ul = nav.firstElementChild;
    const li1 = ul.firstElementChild;
    const img11 = li1.firstElementChild;
    const img12 = img11.nextElementSibling;
    const li2 = li1.nextElementSibling;
    const img21 = li2.firstElementChild;
    const img22 = img21.nextElementSibling;

    const temp1 = img11.className;
    const temp2 = img12.className;
    const temp3 = img21.className;
    const temp4 = img22.className;

    for (const img of imgs1) {
        img.style.visibility = 'hidden';
    }

    for (const img of imgs2) {
        img.style.visibility = 'hidden';
    }

    aside.className = 'trade';
    audio.src = '/audio/evol.mp4';
    audio.setAttribute('autoplay', true);
    text.textContent = `Currently trading ${img11.className} and ${img21.className}`;
    text.style.visibility = 'visible';
    button.setAttribute('disabled', true);

    function trade() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(aside.className = 'tradeReverse');
            }, 7000);
        });
    }

    function visible() {
        return new Promise(resolve => {
            setTimeout(() => {
                audio.src = '/audio/trade.mp3';
                audio.setAttribute('autoplay', true);
                text.textContent = 'The trade has been successful!';

                const temp5 = li1.id;
                li1.id = li2.id;
                li2.id = temp5;

                const temp6 = img11.src;
                img11.src = img21.src;
                img21.src = temp6;

                const temp7 = img22.src;
                img22.src = img12.src;
                img12.src = temp7;

                const temp8 = img11.style.background;
                img11.style.background = img21.style.background;
                img21.style.background = temp8;

                img11.className = temp3;
                img12.className = temp4;
                img21.className = temp1;
                img22.className = temp2;

                for (const img of imgs1) {
                    img.style.visibility = 'visible';
                }
                resolve();
            }, 7000);
        })
    }

    function evol() {
        return new Promise(resolve => {
            if (img11.style.background !== 'rgba(0, 0, 0, 0)') {
                setTimeout(() => {
                    audio.src = '/audio/evol.mp4';
                    audio.setAttribute('autoplay', true);

                    text.textContent = `OMG! ${li1.id} is evolving!`;

                    img11.className = 'evol';
                    img12.className = 'evol2';
                    img12.style.visibility = 'visible';

                    cancel.style.visibility = 'visible';
                    cancel.removeAttribute('disabled');

                    const handleCancel = e => {

                        if (li1.id === 'Graveler') {
                            img11.className = 'Graveler';
                            img12.className = 'Golem';
                            img12.style.visibility = 'hidden';
                        }
                        if (li1.id === 'Haunter') {
                            img11.className = 'Haunter';
                            img12.className = 'Gengar';
                            img12.style.visibility = 'hidden';
                        }
                        audio.src = '';
                        cancel.style.visibility = 'hidden';
                        cancel.setAttribute('disabled', true);
                        text.textContent = 'You canceled the evolution! You are a monster!'
                        resolve();
                    }

                    cancel.addEventListener('click', handleCancel);

                    resolve();

                }, 5000);
            }
            else {
                resolve();
            }
        })
    }

    function check() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 10000);
        })
    }

    function end() {
        return new Promise(resolve => {
            if (img11.className === 'evol') {
                setTimeout(() => {
                    const temp9 = img11.src;
                    img11.src = img12.src;
                    img12.src = temp9;

                    audio.src = '/audio/evolComplete.mp4';
                    audio.setAttribute('autoplay', true);

                    img11.style.background = 'rgba(0, 0, 0, 0)';
                    img12.style.visibility = 'hidden';

                    img11.className = temp4;
                    img12.className = temp3;

                    cancel.style.visibility = 'hidden';
                    text.textContent = `Congratulations! ${img12.className} evolved into ${img11.className}!`

                    resolve();
                }, 1000);
            }
            else {
                resolve();
            }
        })
    }

    function evol2() {
        return new Promise(resolve => {
            if ((img21.style.background !== 'rgba(0, 0, 0, 0)')) {
                setTimeout(() => {
                    audio.src = '/audio/evol.mp4';
                    audio.setAttribute('autoplay', true);

                    text.textContent = `OMG! ${li2.id} is evolving!`;

                    img21.className = 'evol';
                    img22.className = 'evol2';
                    img22.style.visibility = 'visible';

                    cancel2.style.visibility = 'visible';
                    cancel2.removeAttribute('disabled');

                    const handleCancel2 = e => {
                        if (li2.id === 'Graveler') {
                            img21.className = 'Graveler';
                            img22.className = 'Golem';
                            img22.style.visibility = 'hidden';
                        }
                        if (li2.id === 'Haunter') {
                            img21.className = 'Haunter';
                            img22.className = 'Gengar';
                            img22.style.visibility = 'hidden';
                        }
                        audio.src = '';
                        cancel2.style.visibility = 'hidden';
                        cancel2.setAttribute('disabled', true);
                        text.textContent = 'You canceled the evolution! You are a monster!'
                        resolve();
                    }

                    cancel2.addEventListener('click', handleCancel2);

                    resolve();
                }, 5000);
            }
            else {
                resolve();
            }
        })
    }

    function check2() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 10000);
        })
    }

    function end2() {
        return new Promise(resolve => {
            if ((img21.className === 'evol')) {
                setTimeout(() => {
                    const temp10 = img21.src;
                    img21.src = img22.src;
                    img22.src = temp10;

                    audio.src = '/audio/evolComplete.mp4';
                    audio.setAttribute('autoplay', true);

                    img21.style.background = 'rgba(0, 0, 0, 0)';
                    img22.style.visibility = 'hidden';

                    img21.className = temp2;
                    img22.className = temp1;

                    cancel2.style.visibility = 'hidden';
                    text.textContent = `Congratulations! ${img22.className} evolved into ${img21.className}!`
                    resolve();
                }, 1000);
            }
            else {
                resolve();
            }
        })
    }

    async function tradingChain() {
        await trade();
        await visible();
        await evol();
        await check();
        await end();
        await evol2();
        await check2();
        await end2();
        setTimeout(() => {
            button.removeAttribute('disabled');
        }, 5000);
    }

    tradingChain();

};

button.addEventListener('click', handleClick);