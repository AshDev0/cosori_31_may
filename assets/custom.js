$(window).on("load", function () {
  $(".slide-block-grid").slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".main-row").slick({
    arrows: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".shop-slider").slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".corori-banner-slider").slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".corosi-review-slider").slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".posibility-slider").slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  
  $('.main_images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
  asNavFor: '.thumb_images'
});
$('.thumb_images').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.main_images',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  vertical:true
});

//   const accordionItems = document.querySelectorAll('.accordion-item');
//   accordionItems.forEach((item) => {
//   const header = item.querySelector('.accordion-header');
//   const content = item.querySelector('.accordion-content');
//   const svg = item.querySelector('.acc-svg');
//   header.addEventListener('click', () => {
//     // content.classList.toggle('active');
//     content.style.display = content.style.display === 'none' ? 'block' : 'none';
//     svg.style.rotate = svg.style.rotate === '0deg' ? '180deg' : '0deg';
//   });
// });

$(".accordion-header").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("active");  
  let $this = $(this);
  if ($this.next().hasClass("show")) {
    $this.next().removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this.parent().parent().find(".accordion-content").removeClass("show");
    $this.parent().parent().find(".accordion-content").slideUp(350);
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }
});

  $(".autoplay-slider").slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 5000,
    cssEase: 'linear'
  });
});

$(document).on("click", ".accordion-header", function (){
  $(this).children().children("svg").toggleClass("rotate");
});

$(document).ready(function() {
  $('.pdp-tabs .tabs .tab-links a').on('click', function(e)  {
      var currentAttrValue = $(this).attr('href');

      // Show/Hide Tabs
      $('.pdp-tabs .tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
      // Change/remove current tab to active
      $(this).parent('li').addClass('active').siblings().removeClass('active');

      e.preventDefault();
      
      
  });
});


$(window).on("load", function(){
  setTimeout(function(){
    $("#popup .popup").show();
    $("#popup .popup").css({"visibility": "visible", "opacity": "1"});
    
    }, 3000);
    $(".close-btn").click(function(){
      $("#popup .popup").hide();

    });
});



  // var video = $(".play-pause");
  
  //       // Check if video is ready to play
  //       // $(video).on('canplay', function () {
  //           $(video).mouseenter(function () {
  //               $(this).get(0).play();
  //           }).mouseleave(function () {
  //               $(this).get(0).pause();
  //           });
        // });





