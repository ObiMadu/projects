const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseover', () => container.classList.add('show-left'))
left.addEventListener('mouseout', () => container.classList.remove('show-left'))
right.addEventListener('mouseover', () => container.classList.add('show-right'))
right.addEventListener('mouseout', () => container.classList.remove('show-right'))