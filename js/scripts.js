
$(document).ready(function() {
	//Coundown
	$('.countdown').downCount({
        date: '10/22/2022 14:00:00',
        offset: -5
  });
  // Scroll to ID  
  function scrollToId(str) {
        $(str + '[href*="#"]').on('click', function(e) {
            e.preventDefault()
    
            $('html, body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top,
                },
                500,
                'linear'
            )
        })
    }

    //Scroll to ID init
    scrollToId('.header__menu-link');
    scrollToId('.rvsp-btn');

  //To top
  
   (function scrollTop() {

      const btn = $('.to-top');

      $(window).scroll(function() {
          if ($(window).scrollTop() > 300) {
              btn.fadeIn();
          } else {
              btn.fadeOut();
          }
      });

      btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
      });

  }());

  //Mobile menu
    (function mobileMenu() {

        const   openBtn  = $('.mobile-menu-btn'),
                closeBtn = $('.mobile-menu__close'),
                menu     = $('.mobile-menu'),
                navList  = $('.mobile-navigation__list');

        
        openBtn.on('click', function(e) {

            e.preventDefault();
            menu.fadeIn(300);

        });

        closeBtn.on('click', function(e) {

            e.preventDefault();
            menu.fadeOut(300);

        });

        $(document).keypress(function(e) {

            if(e.which == 27)
                menu.fadeOut(300)

        });

        navList.on('click', function(e) {

            let target = e.target;

            if(target.tagName === 'A') {
                menu.fadeOut(300);
                setTimeout( scrollToId('.mobile-navigation__link'), 500);
            }
        });
    }());

 //Dropdown
  (function selectDropdown() {
      const openBtn = $('.select--clicked');
      const dropdown = $('.select-dropdown');
      const label = $('.select__label');
      const span = $('.dropdown__select');

      span.on('click', function() {
          if($(window).width() <= 1000) {
            label.animate({
              position: "absolute",
              top: "-14px",
              fontSize: "12px",
              lightHeight: "16px",
              opacity: "0.7"
            });
          } else {
              label.animate({
              position: "absolute",
              top: "16px",
              fontSize: "12px",
              lightHeight: "16px",
              opacity: "0.7"
            });
          }

          $('.selected__item').html($(this).text());
      });

      openBtn.on('click', function() {
          dropdown.slideToggle('200');
      });

  }());

  $('body').bootstrapMaterialDesign();

	//Story slider
	$('.story__slider').slick({
		infinite: true,
        autoplay: true,
        speed: 300,
		prevArrow: '<button type="button" class="slick-prev arrow-left--colored"></button>',
		nextArrow: '<button type="button" class="slick-next arrow-right--colored"></button>'
	});

  //Fancybox
  // $(".fancy").fancybox({
  //   'hideOnContentClick': true
  //   });

	//Photo slider
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
       breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
        1450: {
          slidesPerView: 6,
          spaceBetween: 32,
        },
      },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },

      renderFraction: function (currentClass, totalClass) {
        return `<span class="${0 + currentClass} "></span>' +
                ' / ' +
                '<span class="${0 + totalClass} "></span>`;
      }
    });

    $('.swiper-slide-active').siblings('.swiper-slide').css('margin-right', '32px');

  // Initialize and add the map
  


});

function initMap() {
    // The location of wedding
    const wedding = { lat: 28.343530, lng: -81.525580 };
    // The map, centered at wedding
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: wedding,
    });
    // The marker, positioned at wedding
    const marker = new google.maps.Marker({
      position: wedding,
      map: map,
    });
  }
  
  window.initMap = initMap;