const imgs = document.getElementById('imgs')
const btnLeft = document.getElementById('left')
const btnRight = document.getElementById('right')

const img = document.querySelectorAll('#imgs img');

let idx = 0;

function myfunf() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1
    }
    imgs.style.transform = `translateX(${-idx * 1540}px)`;
}


btnRight.addEventListener('click', () => {
    idx++;
    myfunf()
})

btnLeft.addEventListener('click', () => {
    idx--;
    myfunf()
})



