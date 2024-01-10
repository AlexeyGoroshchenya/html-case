document.addEventListener('click', (e)=>{
  if(e.target.closest('#filters-open') || e.target.closest('#filters-close') || e.target.closest('#filters-apply')){
    document.querySelector('.filters__filters').classList.toggle('hidden')
  }

  if(!document.querySelector('.nav-header__list').classList.contains('hidden') && !e.target.closest('.nav-header__list')){
      document.querySelector('.nav-header__list').classList.add('hidden')
    }

  if(e.target.closest('#header-button') || e.target.closest('.nav-header__link')){
    e.preventDefault()
    document.querySelector('.nav-header__list').classList.toggle('hidden')
  }

  

  if(document.querySelector('.header__input').classList.contains('hidden') && e.target.closest('.header__search svg')){
    document.querySelector('.header__input').classList.toggle('hidden')
  }
   
  if(!document.querySelector('.header__input').classList.contains('hidden') && !e.target.closest('.header__search')){
    document.querySelector('.header__input').classList.add('hidden')
  }

  
})