let menuBurger = document.querySelector('.burger');

let menuList = document.querySelector('.header__inner');

let burger = document.querySelector('.burger');

let tabsBtn = document.querySelectorAll('.work-list-item-btn');

let tabsItem = document.querySelectorAll('.work-list-tabs-item');

/*burger menu*/

const toggleMenu = () => {
  menuList.classList.toggle('visible');
  menuBurger.classList.toggle('opened');
  burger.classList.toggle('burger--active')
};

menuBurger.addEventListener('click', toggleMenu)



var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

/*work tabs*/
tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('list-item-btn-active')});
    e.currentTarget.classList.add('list-item-btn-active');

    tabsItem.forEach(function(element){element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  })
});

/*work accordion*/
$(function() {
$(".work__accordion").accordion({
  collapsible: true
});
})

/*search*/
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form-show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form-show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })

  document.getElementById('open-search-form-two').addEventListener('click', (e) => {
    document.getElementById('search-form-two').classList.add('search-form-show-two')
  })

  document.getElementById('search-form-close-two').addEventListener('click', (e) => {
    document.getElementById('search-form-two').classList.remove('search-form-show-two')
  })


  document.getElementById('search-form-two').addEventListener('submit', (e) => {
    e.preventDefault()
  })

})
