const person = document.querySelector('.person');
const buraco = document.querySelector('.buraco');
let score = 0;
let isScored = false;
let isSpeedIncreased = false;


const jump = () => {
    person.classList.add('jump');
    setTimeout(() => {
        person.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {

    const buracoPosition = buraco.offsetLeft;
    const personPosition = +window.getComputedStyle(person).bottom.replace('px', '');

    document.querySelector('.score').innerHTML = `Score: ${score}`;

    //console.log(personPosition);
    
    if (buracoPosition < 0 && !isScored) {
        score++;
        document.querySelector('.score').innerHTML = `Score: ${score}`;
        isScored = true;
    }

    if (buracoPosition >= 120) {
        isScored = false;
    }

    if (score >= 10 && !isSpeedIncreased) {
        buraco.style.animationDuration = '1s';
        isSpeedIncreased = true;
    }

    if(buracoPosition <= 120 && buracoPosition > 0 && personPosition < 80) {
        buraco.style.animation = 'none';
        buraco.style.left = `${buracoPosition}px`

        person.style.animation = 'none';
        person.style.bottom = `${personPosition}px`

        person.src = './images/game-over.gif';

        setTimeout(() => {
            alert('Game Over with Score:  ' + score);
            location.reload();
        }, 1000)

        clearInterval(loop);


    }

}, 10)

document.addEventListener('keypress', jump);