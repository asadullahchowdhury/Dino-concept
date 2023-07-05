function Play() {
    const audio = new Audio()
    audio.src = 'sound1.wav'
    audio.play()
    jump()
}


let character = document.getElementById('character')
let block = document.getElementById('block')
let startBtn = document.getElementById('startBtn')
let gameBox = document.querySelector('.game-box')
let overlay = document.querySelector('.game-box-overlay')

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate")
    }
    setTimeout(function () {
        character.classList.remove("animate")
    }, 500)
}

function Start() {
    block.classList.add('play')
    gameBox.classList.remove('game-box-overlay')
    character.classList.add('move')
    startBtn.classList.add('none')
    modal.classList.remove('show-modal')
}


function checkDead() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if (blockLeft < 51 &&
        blockLeft > 0 &&
        characterTop >= 400) {
        block.classList.remove('play')

        const gameOver = new Audio()
        gameOver.src = 'game-over.wav'
        gameOver.play()
        toggleModal()
        character.classList.remove('move')
        startBtn.classList.remove('none')
        // alert("game over")
        setTimeout(function (){
            // window.location.reload()
        },1000)
        console.log('game over')
    }
}

setInterval(function () {
    checkDead()
}, 10)




/**/

var modal = document.querySelector(".modal");

var closeButton = document.querySelector(".close-button");
var replayButton = document.querySelector(".replay-btn");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener("click", toggleModal);
replayButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
