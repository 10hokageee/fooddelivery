
  $(function(){
    $('.restaurants__list-items').slick({
     infinite: false,
     slidesToShow: 4,
     slidesToScroll: 4,
     prevArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
     nextArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>'
    });
   });



function svgSprites() {
  return src('app/images/icons/*.svg') 
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
		.pipe(dest('app/images')); 
}


document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger'); 
  burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active'); 
  });
});

document.addEventListener('DOMContentLoaded', () => {

 
  const burger = document.querySelector('.burger'); 
  const mobileMenu = document.querySelector('.menu'); 
  const bodyLock = document.querySelector('body'); 

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu--active'); 
    if (mobileMenu.classList.contains('menu--active'))  { 
      burger.classList.add('burger--active'); 
      bodyLock.classList.add('lock'); 
    }
    else { 
      burger.classList.remove('burger--active'); 
      bodyLock.classList.remove('lock'); 
    }
  });
});

