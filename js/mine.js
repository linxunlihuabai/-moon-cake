
$(function () {
  // 菜单栏单击
  $('.menu').click(function (e) {
    e.stopPropagation();
    $('.mobile-bg').show()
    $('.nav').addClass('active');

  })
  $('.nav').click(function (e) {
    e.stopPropagation();
  })
  $(document).click(function () {
    $('.mobile-bg').hide()
    $('.nav').removeClass('active')
  })
  // 轮播图高度变化
  function gethei() {
    var $hei = $(window).outerWidth() / 2;
    if ($hei >= $(window).outerHeight()) $hei = $(window).outerHeight()
    $('.slides').outerHeight($hei);
  }

  function getwid() {
    if ($(window).width() >= 992) {
      $('.goods .title .lg-h2').html('欢饮光临麦轩商城，团购订购，价格更优惠，减价咨询13715349101<span>|</span>');
    } else {
      $('.goods .title .lg-h2').html('团购订购获取更多优惠 | 砍价咨询13715349101<span>|</span>');
    }
  }

  gethei();
  getwid();

  $(window).resize(function () {
    gethei();
    lazy();
    getwid();
  })

  //头部滚动
  function headscroll() {

    if ($(document).scrollTop() > 30) {
      $('.header').addClass('hidden')
    } else {
      $('.header').removeClass('hidden')
    }
    if ($(document).scrollTop() > 400) {
      $('.back-top').fadeIn();
    } else {
      $('.back-top').fadeOut();
    }

  }

  function lazy() {
    $('.info').each(function (index) {
      var top = this.parentNode.getBoundingClientRect().top;
      var totalH = $(window).height();
      var total = $('.goods').position().top + $('.goods').outerHeight();
      if (top <= totalH - 50 && $(window).scrollTop() < total) {

        $(this).addClass('new-active').css({
          'transition-delay': index * .1 + 's',
        })
      }
    })
  }

  headscroll();
  lazy();
  
  $(document).scroll(function (e) {


    headscroll();

    //图片懒加载动画
    lazy();






  })



  var $text = $('.goods .title .lg-h2').text();
  var $text_md = $('.goods .title .md-h2').text();

  var i = 0;
  var int = setInterval(function () {

    $('.goods .title .lg-h2').text($text.substring(0, i) + $text.slice(-1));

    i++;


    if ($('.goods .title .lg-h2').text() == $text) {
      clearInterval(int);
      $('.goods .title .lg-h2').text($text.slice(0, -1));
      $('<span>|</span>').appendTo($('.goods .title .lg-h2'));
      setInterval(function () {
        $('.goods .title .lg-h2 span').fadeToggle();
      }, 30)
    }
  }, 60)




})


window.onload = function () {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })



}
