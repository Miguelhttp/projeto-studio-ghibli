const menu = document.querySelector('.navbar')
const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('#close-btn')

menuBtn.addEventListener('click', () => {
  menu.classList.add('active')
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active')
})
