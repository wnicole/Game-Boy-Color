$(function() {

    // GET THE SECOND PAGE SVG DATA FOR THE GAME BOY TECH TARGETS
    $.get("gameboyInfoTargets.svg", function(res) {
        $("#targetSvgContainer").html(res);
    }, "text");

//FIRST PAGE GAME BOY FAN OUT
    $('.backLeft').addClass('backLeftEnd');
    $('.backRight').addClass('backRightEnd');
    $('.midLeft').addClass('midLeftEnd');
    $('.midRight').addClass('midRightEnd');

//EMULATOR  HOVER POP UP

      $('.frontGB').mouseenter(function(){
        $('.click2playBubble').css('opacity', '1');
      });
      $('.frontGB').mouseleave(function(){
        $('.click2playBubble').css('opacity', '0');
      });

      $('.click2playBubble').mouseenter(function(){
        $('.click2playBubble').css('opacity', '1');
      });
      $('.click2playBubble').mouseleave(function(){
        $('.click2playBubble').css('opacity', '0');
      });


//ORDER PAGE CARD SELECT

      $('.Card').click(function(){
        $('.Card').removeClass('cardSelected');
        $(this).addClass('cardSelected');
      });


//ORDER PAGE CARD SELECT

      $('.next').click(function(){
        $('.payPage1').css('display', 'none');
        $('.payPage2').css('display', 'block');
      });

      $('.back').click(function(){
        $('.payPage2').css('display', 'none');
        $('.payPage1').css('display', 'block');
      });


//ORDER PAGE GAME SELECT

      var selectedGame;

      $('.game1option').click(function(){
        $('.gameSelectBG').fadeIn(150);
        selectGame = '.game1option';
      });

      $('.game2option').click(function(){
        $('.gameSelectBG').fadeIn(150);
        selectGame = '.game2option';
      });

      $('.game3option').click(function(){
        $('.gameSelectBG').fadeIn(150);
        selectGame = '.game3option';
      });

      $('.gameSelectBG').click(function(){
        $('.gameSelectBG').fadeOut(150);
      });



      $('#game1').click(function(){
        $(selectGame).css('background-image', 'url(img/cartridge01.png)');
        $(selectGame +' p').css('display', 'none');
        $('.gameSelectBG').fadeOut(150);
      });

      $('#game2').click(function(){
        $(selectGame).css('background-image', 'url(img/cartridge03.png)');
        $(selectGame +' p').css('display', 'none');
        $('.gameSelectBG').fadeOut(150);
      });

      $('#game3').click(function(){
        $(selectGame).css('background-image', 'url(img/cartridge04.png)');
        $(selectGame +' p').css('display', 'none');
        $('.gameSelectBG').fadeOut(150);
      });

      $('#game4').click(function(){
        $(selectGame).css('background-image', 'url(img/cartridge10.png)');
        $(selectGame +' p').css('display', 'none');
        $('.gameSelectBG').fadeOut(150);
      });

      $('#game5').click(function(){
        $(selectGame).css('background-image', 'url(img/cartridge11.png)');
        $(selectGame +' p').css('display', 'none');
        $('.gameSelectBG').fadeOut(150);
      });

      $('#game6').click(function(){
        $(selectGame).css('background-image', 'url(img/cartridge13.png)');
        $(selectGame +' p').css('display', 'none');
        $('.gameSelectBG').fadeOut(150);
      });

      $('#game7').click(function(){
        $(selectGame).css('background-image', 'url(img/cartridge15.png)');
        $(selectGame +' p').css('display', 'none');
        $('.gameSelectBG').fadeOut(150);
      });

      $('#game8').click(function(){
        $(selectGame).css('background-image', 'url(img/cartridge17.png)');
        $(selectGame +' p').css('display', 'none');
        $('.gameSelectBG').fadeOut(150);
      });

      $('#game9').click(function(){
        $(selectGame).css('background-image', 'url(img/cartridge22.png)');
        $(selectGame +' p').css('display', 'none');
        $('.gameSelectBG').fadeOut(150);
      });

      $('#game10').click(function(){
        $(selectGame).css('background-image', 'url(img/cartridge26.png)');
        $(selectGame +' p').css('display', 'none');
        $('.gameSelectBG').fadeOut(150);
      });




//KONAMI CODE
    var score=0;
    $(document).keydown(function(event){


      var codes = [38,38,40,40,37,39,37,39,66,65];

      // going up
      if(event.which == 38) {
        event.preventDefault();
      }

      // going down
      if(event.which == 40) {
        event.preventDefault();
      }



      if (codes[score] === event.which) {
        score++;
      } else {
        score=0;
        if(codes[0] == event.which){
            ++score;
        }
      }

      if (score > 9) {
        score=0;
        $('#konami')[0].play();
        $('.konamiHeart').fadeIn(250);
        setTimeout(function() {
          $('.konamiHeart').fadeOut(250)
        }, 23000);
      }
    });

//SWITCH GAMEBOY COLOR ON FORM

  $('.Color').click(function(){
      // "this" refers to the element just clicked. However it is not a jquery retrieved var. This means we can't use jquery functions on it (yet).
      // In order to use jquery functions on the element just clicked, we must pass it though the jquery "set up" function: $()
      $(this).append($('#colorSelected'));

     /*
 // Get the element with jquery and assign it to the var 'clickedElement' so we can use jquery functions on that var.
      var clickedElement = $(this);

      // call the hasClass jquery function
      var hasRedClass = clickedElement.hasClass(".colorRed");
*/

      if ($(this).hasClass("colorRed")){
       $('.largeGB img').attr('src', 'img/redGB.svg');
      }

      if ($(this).hasClass("colorGreen")){
       $('.largeGB img').attr('src', 'img/greenGB.svg');
      }

      if ($(this).hasClass("colorYellow")){
       $('.largeGB img').attr('src', 'img/yellowGB.svg');
      }

      if ($(this).hasClass("colorBlue")){
       $('.largeGB img').attr('src', 'img/blueGB.svg');
      }

      if ($(this).hasClass("colorPurple")){
       $('.largeGB img').attr('src', 'img/purpleGB.svg');
      }


  });


//WAYPOINTS

  $('.fadeIn').hide();

    $('.secondContainer').waypoint(function(direction) {
      $('nav span').removeClass('page1On');
      if(direction == 'down'){
        $('.p2').addClass('page2On');
        //Restarting Game Boy Fan on Page 1
        $('.backLeft').removeClass('backLeftEnd');
        $('.backRight').removeClass('backRightEnd');
        $('.midLeft').removeClass('midLeftEnd');
        $('.midRight').removeClass('midRightEnd');
      } else {
          $('.p1').addClass('page1On');
          $('.p2').removeClass('page2On');
          //Restarting Game Boy Fan on Page 1
          $('.backLeft').addClass('backLeftEnd');
          $('.backRight').addClass('backRightEnd');
          $('.midLeft').addClass('midLeftEnd');
          $('.midRight').addClass('midRightEnd');
      }
    }, { offset: 50 });

    $('.thirdContainer').waypoint(function(direction) {
      $('nav span').removeClass('page2On');
      if(direction == 'down'){
        $('.p3').addClass('page3On');
      } else {
          $('.p2').addClass('page2On');
          $('.p3').removeClass('page3On');
      }
    }, { offset: 50 });

    $('.fourthContainer').waypoint(function(direction) {
      $('nav span').removeClass('page3On');
      if(direction == 'down'){
        $('.navBuy').css('background-color', '#71a900');
        $('.p4').addClass('page4On');
      } else {
          $('.p3').addClass('page3On');
          $('.p4').removeClass('page4On');
          $('.navBuy').css('background-color', 'rgb(142, 194, 63)');
      }
    }, { offset: 50 });


//ORDER FORM THANK YOU MODAL

  $('.done').click(function() {
    $('.thankYouModal').fadeIn(350);
    setTimeout(function() {
      $('.thankYouModal').fadeOut(350);
    }, 5000);
  });

  $('.thankYouModal').click(function() {
    $('.thankYouModal').fadeOut(350);
  });



// scrollTo

  $('.p1').click(function() {
    $.scrollTo('.firstContainer', 1000);
  });

  $('.p2').click(function() {
    $.scrollTo('.secondContainer', 1000);
  });

  $('.p3').click(function() {
    $.scrollTo('.thirdContainer', 1000);
  });

  $('.p4').click(function() {
    $.scrollTo('.fourthContainer', 1000);
  });


// page Advance on scroll
  var prevScroll = 0;

  var scrollHandler = _.throttle(function(e) {


    //This 'if' statement checks if the emulator div is showing and the 'return false' prevents it from scrolling
    if ($('.gameBoyContainer').hasClass('gameBoyDown')) {
      return false;
    }

    if ($('.gameSelectBG').css('display')==='block') {
      return false;
    }
    var scrollDelta = e.originalEvent.detail ? e.originalEvent.detail : e.originalEvent.wheelDelta;

    if (scrollDelta < 0) {
      if ($('.p1').hasClass("page1On")) {
        $.scrollTo('.secondContainer', 1000);
      } else if ($('.p2').hasClass("page2On")) {
        $.scrollTo('.thirdContainer', 1000);
      } else if ($('.p3').hasClass("page3On")) {
        $.scrollTo('.fourthContainer', 1000);
      }
    } else {
      if ($('.p2').hasClass("page2On")) {
        $.scrollTo('.firstContainer', 1000);
      } else if ($('.p3').hasClass("page3On")) {
        $.scrollTo('.secondContainer', 1000);
      } else if ($('.p4').hasClass("page4On")) {
        $.scrollTo('.thirdContainer', 1000);
      }
    }
    return false;
  }, 1250, {trailing: false});

  $(window).bind('DOMMouseScroll', scrollHandler);
  $(window).bind('mousewheel', scrollHandler);


// Game Boy emulator

  var GBloaded = false;

  GBC.init({canvas: "GBCanvas"});

  $('.frontGB, .click2playBubble').click(function(){
    if (GBloaded === false) {
      GBC.loadRom('roms/CrazyZone.cgb');
      GBloaded = true;
    }
    $('.emulatorSection').fadeIn();
    $('.gameBoyContainer').addClass('gameBoyDown');
    GBC.run();
  });

  $('.gameBoyContainer').click(function(){
    $('.emulatorSection').fadeOut();
    $('.gameBoyContainer').removeClass('gameBoyDown');
    GBC.pause();
  });


//emulator depressed keys

  $(document).keydown(function(event){

      if(event.which == 38) {
        $('.UPkey').show();
      }

      if(event.which == 40) {
        $('.DOWNkey').show();
      }

      if(event.which == 37) {
        $('.LEFTkey').show();
      }

      if(event.which == 39) {
        $('.RIGHTkey').show();
      }

      if(event.which == 90) {
        $('.Akey').show();
      }

      if(event.which == 88) {
        $('.Bkey').show();
      }

  });

  $(document).keyup(function(event){

      if(event.which == 38) {
        $('.UPkey').hide();
      }

      if(event.which == 40) {
        $('.DOWNkey').hide();
      }

      if(event.which == 37) {
        $('.LEFTkey').hide();
      }

      if(event.which == 39) {
        $('.RIGHTkey').hide();
      }

      if(event.which == 90) {
        $('.Akey').hide();
      }

      if(event.which == 88) {
        $('.Bkey').hide();
      }

  });













});
