$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color', 'red');
  });
});

const opt = { //swiperのオプションを定数化
  loop: true, //最後までスライドしたら最初に戻る
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

//swiperを実行（初期化）
$(document).on('turbolinks:load', function() {
  let swiper = new Swiper('.swiper',opt);
});