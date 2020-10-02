
   $(document).ready(function(){
    "use strict";
    
    var nav_offset_top = $('header').height() + 100; 
    
    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('header').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top) {
                    $("header").addClass("navbar_fixed");
                } else {
                    $("header").removeClass("navbar_fixed");
                }
            })
        }
    }
    navbarFixed();







    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
     
    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
     
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
     
      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
     
      var that = this;
      var delta = 300 - Math.random() * 100;
     
      if (this.isDeleting) { delta /= 2; }
     
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
     
      setTimeout(function() {
        that.tick();
      }, delta);
    };
     
    window.onload = function() {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    };
    


    AOS.init({
      duration:2000
    });


    $('.counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });
    });







    $('.portfolio-menu').isotope({
      itemSelector: 'item',
      layoutMode:'fitRows'
    });
  
        $('.portfolio-menu ul li').click(function(){
          $('.portfolio-menu ul li').removeClass('active');
          $(this).addClass('active');
  
          var selector = $(this).attr('data-filter');
          $('.portfolio-item').isotope({
            filter:selector
          });
          return false;
        });
  
        
        $(".hover").mouseleave(
          function () {
            $(this).removeClass("hover");
          }
        );





        $('.testiSlide').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          responsive: [{
          breakpoint: 850,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          }
          }]
        });


        $('nav a').smoothScroll();


 });











