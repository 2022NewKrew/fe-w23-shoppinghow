export function initSearchInput () {
  const searchInput = document.querySelector('.header-top .search form .search__input')
  searchInput.addEventListener('focus', () => {
    const rollbox = document.querySelector('.header-top .search .search-rollbox')
    rollbox.classList.add('none')
  })
  searchInput.addEventListener('blur', () => {
    const rollbox = document.querySelector('.header-top .search .search-rollbox')
    rollbox.classList.remove('none')
  })
}
