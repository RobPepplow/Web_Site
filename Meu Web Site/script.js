const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

const text1 = document.getElementById('text')
const text01 = 'Seja Bem Vindo ao meu Website'
const text2 = document.getElementById('text1')
const text02 = `Me chamo Robson Pepplow Lopes, e aqui você irá conhecer um pouco mais sobre mim e meus Projetos.`
let idx = 1
let speed = 300 / 2

writeText()

function writeText() {
    text1.innerText = text01.slice(0, idx)
    idx++
    text2.innerText = text02.slice(0, idx)
    idx++
    setTimeout(writeText, speed)
}


/*Script do Carrosel*/
let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function () {
    nextImage()
}, 4000)

function nextImage() {
    count++
    if (count > 4) {
        count = 1
    }

    document.getElementById('radio' + count).checked = true
}

