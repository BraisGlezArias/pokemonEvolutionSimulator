'use strict';

const liP1 = document.querySelector('header nav ul.Pokemons li.Eevee');
const imgE = liP1.lastElementChild;
const imgV = imgE.previousElementSibling;
const imgJ = imgV.previousElementSibling;
const imgF = imgJ.previousElementSibling;

const liP2 = document.querySelector('header nav ul.Pokemons li.Pikachu');
const imgP = liP2.lastElementChild;
const imgAP = imgP.previousElementSibling;
const imgR = imgAP.previousElementSibling;

const stones = document.querySelectorAll('header nav ul.Stones li img');

const liS1 = document.querySelector('header nav ul.Stones li.fire')
const liS2 = liS1.nextElementSibling;
const liS3 = liS2.nextElementSibling;

const audio = document.createElement('audio');
audio.setAttribute('src', '');

const header = document.querySelector('header');
const text = document.createElement('p');
text.textContent = '';
text.setAttribute('class', 'state');
header.appendChild(text);

function onMouseDown(e) {
    const stone = e.target;

    let shiftX = e.clientX - stone.getBoundingClientRect().left;
    let shiftY = e.clientY - stone.getBoundingClientRect().top;

    stone.style.position = 'absolute';
    stone.style.zIndex = 1000;
    stone.style.width = 5 + '%';
    stone.style.cursor = 'pointer';

    document.body.append(stone);

    moveAt(e.pageX, e.pageY);

    function moveAt(pageX, pageY) {
        stone.style.left = pageX - shiftX + 'px';
        stone.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);

        stone.hidden = true;
        let elementBelow = document.elementFromPoint(e.clientX, e.clientY);
        stone.hidden = false;

        if (elementBelow.className === 'droppable') {

            const parent = elementBelow.parentElement;

            stone.removeEventListener('mouseup', onMouseUp);

            if (elementBelow === imgE) {
                if (stone.className === 'fire') {
                    liS1.appendChild(stone);
                    stone.style.left = liS1.style.left;
                    stone.style.top = liS1.style.top;

                    imgE.id = 'evol';
                    imgF.id = 'evol2';
                    imgF.style.visibility = 'visible';

                    for (const stone of stones) {
                        stone.removeEventListener('mousedown', onMouseDown);
                    }

                    audio.src = '/audio/evol.mp4';
                    audio.setAttribute('autoplay', true);
                    text.textContent = `Wow! ${liP1.className} is evolving!`;

                    const b = document.getElementsByClassName('cancel');

                    if (b.length === 0) {
                        const cancel = document.createElement('button');
                        cancel.setAttribute('class', 'cancel');
                        parent.appendChild(cancel);

                        const handleCancel = e => {
                            imgE.id = 'Eevee';
                            imgF.id = 'Flareon';
                            imgF.style.visibility = 'hidden';

                            for (const stone of stones) {
                                stone.addEventListener('mousedown', onMouseDown);
                            }

                            audio.src = '';
                            parent.removeChild(cancel);
                            clearTimeout(timer);
                            text.textContent = 'You canceled the evolution! How dare you?'
                        }

                        cancel.addEventListener('click', handleCancel);

                        const timer = setTimeout(function () {

                            imgE.id = 'Eevee';
                            imgE.style.visibility = 'hidden';
                            imgF.id = 'Flareon';

                            for (const stone of stones) {
                                stone.addEventListener('mousedown', onMouseDown);
                            }

                            text.textContent = `Congratulations! ${imgE.id} evolved into ${imgF.id}!`;
                            audio.src = '/audio/evolComplete.mp4';
                            audio.setAttribute('autoplay', true);
                            parent.removeChild(cancel);

                        }, 11000);
                    }
                }
                else if (stone.className === 'thunder') {
                    liS2.appendChild(stone);
                    stone.style.left = liS2.style.left;
                    stone.style.top = liS2.style.top;

                    imgE.id = 'evol';
                    imgJ.id = 'evol2';
                    imgJ.style.visibility = 'visible';

                    for (const stone of stones) {
                        stone.removeEventListener('mousedown', onMouseDown);
                    }

                    audio.src = '/audio/evol.mp4';
                    audio.setAttribute('autoplay', true);
                    text.textContent = `Wow! ${liP1.className} is evolving!`;

                    const b = document.getElementsByClassName('cancel');

                    if (b.length === 0) {
                        const cancel = document.createElement('button');
                        cancel.setAttribute('class', 'cancel');
                        parent.appendChild(cancel);

                        const handleCancel = e => {
                            imgE.id = 'Eevee';
                            imgJ.id = 'Jolteon';
                            imgJ.style.visibility = 'hidden';

                            for (const stone of stones) {
                                stone.addEventListener('mousedown', onMouseDown);
                            }

                            audio.src = '';
                            parent.removeChild(cancel);
                            clearTimeout(timer);
                            text.textContent = 'You canceled the evolution! How dare you?'
                        }

                        cancel.addEventListener('click', handleCancel);

                        const timer = setTimeout(function () {

                            imgE.id = 'Eevee';
                            imgE.style.visibility = 'hidden';
                            imgJ.id = 'Jolteon';

                            for (const stone of stones) {
                                stone.addEventListener('mousedown', onMouseDown);
                            }

                            text.textContent = `Congratulations! ${imgE.id} evolved into ${imgJ.id}!`;
                            audio.src = '/audio/evolComplete.mp4';
                            audio.setAttribute('autoplay', true);
                            parent.removeChild(cancel);

                        }, 11000);
                    }
                }
                else if (stone.className === 'water') {
                    liS3.appendChild(stone);
                    stone.style.left = liS3.style.left;
                    stone.style.top = liS3.style.top;

                    imgE.id = 'evol';
                    imgV.id = 'evol2';
                    imgV.style.visibility = 'visible';

                    for (const stone of stones) {
                        stone.removeEventListener('mousedown', onMouseDown);
                    }

                    audio.src = '/audio/evol.mp4';
                    audio.setAttribute('autoplay', true);
                    text.textContent = `Wow! ${liP1.className} is evolving!`;

                    const b = document.getElementsByClassName('cancel');

                    if (b.length === 0) {
                        const cancel = document.createElement('button');
                        cancel.setAttribute('class', 'cancel');
                        parent.appendChild(cancel);

                        const handleCancel = e => {
                            imgE.id = 'Eevee';
                            imgV.id = 'Vaporeon';
                            imgV.style.visibility = 'hidden';

                            for (const stone of stones) {
                                stone.addEventListener('mousedown', onMouseDown);
                            }

                            audio.src = '';
                            parent.removeChild(cancel);
                            clearTimeout(timer);
                            text.textContent = 'You canceled the evolution! How dare you?'
                        }

                        cancel.addEventListener('click', handleCancel);

                        const timer = setTimeout(function () {

                            imgE.id = 'Eevee';
                            imgE.style.visibility = 'hidden';
                            imgV.id = 'Vaporeon';

                            for (const stone of stones) {
                                stone.addEventListener('mousedown', onMouseDown);
                            }

                            text.textContent = `Congratulations! ${imgE.id} evolved into ${imgV.id}!`;
                            audio.src = '/audio/evolComplete.mp4';
                            audio.setAttribute('autoplay', true);
                            parent.removeChild(cancel);

                        }, 11000);
                    }
                }
            }

            else if (elementBelow === imgP) {
                if (stone.className === 'fire') {
                    liS1.appendChild(stone);
                    stone.style.left = liS1.style.left;
                    stone.style.top = liS1.style.top;

                    text.textContent = `It's not possible to use the ${stone.className} stone on this Pokémon.`
                }
                else if (stone.className === 'thunder') {
                    liS2.appendChild(stone);
                    stone.style.left = liS2.style.left;
                    stone.style.top = liS2.style.top;

                    imgP.id = 'evol';
                    imgR.id = 'evol2';
                    imgR.style.visibility = 'visible';

                    for (const stone of stones) {
                        stone.removeEventListener('mousedown', onMouseDown);
                    }

                    audio.src = '/audio/evol.mp4';
                    audio.setAttribute('autoplay', true);
                    text.textContent = `Wow! ${liP2.className} is evolving!`;

                    const b = document.getElementsByClassName('cancel');

                    if (b.length === 0) {
                        const cancel2 = document.createElement('button');
                        cancel2.setAttribute('class', 'cancel');
                        parent.appendChild(cancel2);

                        const handleCancel2 = e => {
                            imgP.id = 'Pikachu';
                            imgR.id = 'Raichu';
                            imgR.style.visibility = 'hidden';

                            for (const stone of stones) {
                                stone.addEventListener('mousedown', onMouseDown);
                            }

                            audio.src = '';
                            parent.removeChild(cancel2);
                            clearTimeout(timer);
                            text.textContent = `You canceled the evolution! ${imgP.id} is happy!`
                        }

                        cancel2.addEventListener('click', handleCancel2);

                        const timer = setTimeout(function () {

                            imgP.id = 'Pikachu';
                            imgP.style.visibility = 'hidden';
                            imgR.style.visibility = 'hidden';
                            imgAP.style.visibility = 'visible'

                            for (const stone of stones) {
                                stone.addEventListener('mousedown', onMouseDown);
                            }

                            text.textContent = `${imgP.id} doesn't want to evolve! Now he is angry!`;
                            audio.src = '/audio/evolComplete.mp4';
                            audio.setAttribute('autoplay', true);
                            parent.removeChild(cancel2);

                        }, 11000);
                    }
                }
                else if (stone.className === 'water') {
                    liS3.appendChild(stone);
                    stone.style.left = liS3.style.left;
                    stone.style.top = liS3.style.top;

                    text.textContent = `It's not possible to use the ${stone.className} stone on this Pokémon.`
                }
            }
        }

        else if (elementBelow.className === 'notdroppable') {

            if (stone.className === 'fire') {
                liS1.appendChild(stone);
                stone.style.left = liS1.style.left;
                stone.style.top = liS1.style.top;
            }
            else if (stone.className === 'thunder') {
                liS2.appendChild(stone);
                stone.style.left = liS2.style.left;
                stone.style.top = liS2.style.top;
            }
            else if (stone.className === 'water') {
                liS3.appendChild(stone);
                stone.style.left = liS3.style.left;
                stone.style.top = liS3.style.top;
            }

            text.textContent = `It's not possible to use the ${stone.className} stone on this Pokémon.`;
        }

        else if (!elementBelow.className) {
            document.body.append(stone);
            stone.style.left = e.pageX - shiftX + 'px';
            stone.style.top = e.pageY - shiftY + 'px';
        }
    }

    stone.addEventListener('mouseup', onMouseUp)
}

for (const stone of stones) {
    stone.addEventListener('mousedown', onMouseDown)
}