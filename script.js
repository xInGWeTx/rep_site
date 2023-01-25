const swiper = new Swiper('.slide_reviews', {
    speed: 400,
    spaceBetween: 25,
    direction:"vertical",
    slidesPerView: 3,
    loop:true,
  });
  let topSlide=document.querySelector('.but_top');
  topSlide.onclick=()=>{swiper.slideNext()};

  let bottomSlide=document.querySelector('.but_bottom');
  bottomSlide.onclick=()=>{swiper.slidePrev()};