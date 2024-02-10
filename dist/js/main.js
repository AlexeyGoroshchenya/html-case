



const blogList = document.querySelector('.blog__list')
const scrollInput = document.querySelector('.custom-scrollbar')

const changeScrollInput = (input) => {

  let scrollSize = ((blogList.scrollHeight - blogList.clientHeight) / 100) * parseFloat(input.value)
  blogList.scroll({
    top: scrollSize,
    left: 0,
  })
}


const moveLanguageButton = () => {
  if (window.screen.width < 992) {

    const languageButton = document.querySelector('#lang').cloneNode(true);

    document.querySelector('.header__menu-button ').before(languageButton)
    document.querySelectorAll('#lang')[0].remove()
  } else if ((window.screen.width >= 992)) {

    const languageButton = document.querySelector('#lang').cloneNode(true);
    document.querySelector('.header__buttons ').prepend(languageButton)
    document.querySelectorAll('#lang')[1].remove()

  }
}

blogList.addEventListener('scroll', (e) => {

  const rangepercent = Math.ceil((blogList.scrollTop / (blogList.scrollHeight - blogList.clientHeight)) * 100)

  scrollInput.value = rangepercent
})

scrollInput.addEventListener('input', (e) => {
  changeScrollInput(e.target)
})

document.addEventListener('click', (e) => {
  if (e.target.closest('.header__menu-button')) {
    e.target.closest('.header__menu-button').classList.toggle('active')
    document.querySelector('.header__menu').classList.toggle('active')
  }

  if (e.target.closest('#lang') && !e.target.closest('.buttons-header__language-option')) {
    document.querySelector('.buttons-header__language-list').classList.toggle('active')
  }

  if(document.querySelector('.buttons-header__language-list.active') && !e.target.closest('#lang')){
    document.querySelector('.buttons-header__language-list').classList.remove('active')
  }

  if (e.target.closest('.buttons-header__language-option')) {
    document.querySelectorAll('.buttons-header__language-option').forEach(item => {
      item.classList.remove('active')
      e.target.closest('.buttons-header__language-option').classList.add('active')
    })
    document.querySelector('#lang span').textContent = e.target.textContent

    if (window.screen.width < 992) {
      let timeoutId = setTimeout(() => {
      document.querySelector('.buttons-header__language-list').classList.remove('active')
      clearTimeout(timeoutId)
    }, 1000)
    } else {}
    
   
  }



})

window.addEventListener("orientationchange", function () {
  moveLanguageButton()
}, false);

moveLanguageButton()

