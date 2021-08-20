const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4

    boxes.forEach((box, idx) => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop<triggerBottom) {
            box.innerHTML = idx
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}