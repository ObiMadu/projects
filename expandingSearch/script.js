const clickSearch = document.getElementById('click-search')
const search = document.getElementById('search')

clickSearch.addEventListener('click', () => { 
    search.classList.toggle('active')
    search.focus()
})