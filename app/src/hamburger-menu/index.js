const menu = document.querySelector('#header-menu')
const btn = document.querySelector('#hamburger')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  menu.classList.toggle('open')
  if(menu.classList.contains("open")){
    menu.style.height = menu.scrollHeight + 'px'
  }else{
    menu.style.height = "0"
  }
})
