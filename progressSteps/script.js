const barline = document.getElementById('bar-line')
const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const counts = document.querySelectorAll('.count')

let shouldActive = 1

prev.addEventListener('click', () => {
    shouldActive--
    if (shouldActive < 1) {
        shouldActive = 1        
    }
    update()
})

next.addEventListener('click', () => {
    shouldActive++
    if (shouldActive > counts.length) {
        shouldActive = counts.length        
    }
    update()
})

function update() {
    if (shouldActive === 1) {
        prev.disabled = true
    } else if (shouldActive == counts.length){
        next.disabled = true
    } else {
        next.disabled = false
        prev.disabled = false
    }

    counts.forEach((count, idx) => {
        if (idx < shouldActive) {
            count.classList.add('active');
        } else {
            count.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');
    barline.style.width = ((actives.length - 1) / (counts.length - 1)) * 100 + '%'

}