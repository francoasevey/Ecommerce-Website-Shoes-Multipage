var countDownDate = new Date("Dec 13, 2024 15:13:00").getTime();
      
      // Update the count down every 1 second
      var x = setInterval(function() {
      
        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("days").innerHTML = days + "d";
        document.getElementById("hours").innerHTML = hours + "h";
        document.getElementById("minutes").innerHTML = minutes + "m";
        document.getElementById("seconds").innerHTML = seconds + "s";
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);


    
      
      
function copyMenu(){
  var dpCategory = document.querySelector('.dpt-cat');
  var dptPlace = document.querySelector('.departments');
  dptPlace.innerHTML = dpCategory.innerHTML;

  var mainNav = document.querySelector('.header-nav nav');
  var navPlace = document.querySelector('.off-canvas nav');
  navPlace.innerHTML = mainNav.innerHTML;

  var topNav = document.querySelector('.header-top .wrapper');
  var topPlace = document.querySelector('.off-canvas .thetop-nav')
  topPlace.innerHTML = topNav.innerHTML;

}
copyMenu();

const menuButton = document.querySelector('.trigger'),
closeButton = document.querySelector('.t-close'),
addclass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
  addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function() {
  addclass.classList.remove('showmenu')
})

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e){
  e.preventDefault();
  submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
  if (this.closest('.has-child').classList != 'expand');
  this.closest('.has-child').classList.toggle('expand')
}

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },
});

const searchButton = document.querySelector('.t-search'),
tClose = document.querySelector('.search-close'),
showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
  showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function() {
  showClass.classList.remove('showsearch')
})

const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function() {
  dptClass.classList.toggle('showdpt')
})

var productThumb = new Swiper ('.small-image', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    }
  }
});
var productBig = new Swiper ('.big-image', {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: productThumb,
  }
})

const stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++){
  let stock = stocks[x].dataset.stock,
  available = stocks[x].querySelector('.qty-available').innerHTML,
  sold= stocks[x].querySelector('.qty-sold').innerHTML,
  percent = sold*100/stock;

  stocks[x].querySelector('.available').style.width = percent + "%"
}



const divToShow = '.mini-cart';
const divPopup = document.querySelector(divToShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', ()=> {
  setTimeout(() =>{
    if (!divPopup.classList.contains('show')) {
      divPopup.classList.add('show');
    }
  }, 250)
})

document.addEventListener('click', (e) => {
  const isClosest = e.target.closest(divToShow);
  if (!isClosest && divPopup.classList.contains('show')) {
    divPopup.classList.remove('show');
  }
})

window.onload = function () {
  document.querySelector('.site').classList.toggle('showmodal')

}
document.querySelector('.modalclose').addEventListener('click', function() {
  document.querySelector('.site').classList.remove('showmodal')
})

const FtoShow = '.filter';
const Fpopup = document.querySelector(FtoShow);
const Ftrigger = document.querySelector('.filter-trigger');

Ftrigger.addEventListener('click', () =>{
  setTimeout(() =>{
    if (!Fpopup.classList.contains('show')) {
      Fpopup.classList.add('show')
    }
  }, 250)
})

document.addEventListener('click', (e) =>{
  const  isClosest = e.target.closest(FtoShow);
  if (!isClosest && Fpopup.classList.contains('show')) {
    Fpopup.classList.remove('show')
  }
})