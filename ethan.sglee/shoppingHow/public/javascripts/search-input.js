export function initSearchInput () {
  const searchInput = document.querySelector('.header-top .search form .search__input')
  searchInput.addEventListener('focus', () => {
    console.log('포커스')
    const rollbox = document.querySelector('.header-top .search .search-rollbox')
    rollbox.classList.add('none')
  })
  searchInput.addEventListener('blur', () => {
    console.log('풀림')
    const rollbox = document.querySelector('.header-top .search .search-rollbox')
    rollbox.classList.remove('none')
  })
}