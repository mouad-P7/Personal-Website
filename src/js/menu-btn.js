$(document).ready(function(){


  let mediumWidth = 720;//720px
  $(window).resize(function(){
    console.log('resize')
    let width = $(this).innerWidth();
    if(width > mediumWidth){
      $('.header-nav-btn').css({'display':'none'});
    }else{
      if($('nav').css('left') == 0){
        $('.close-menu-btn').css({'display':'inline-block'});
      }else{
        $('.open-menu-btn').css({'display':'inline-block'});
      }
    }
  });


  $('.open-menu-btn').click(function(){
    $('.open-menu-btn').css({'display':'none'})
    $('nav').css({'left':'0'})
    $('.close-menu-btn').css({'display':'inline-block'})
  })
  $('.close-menu-btn').click(function(){
    $('.close-menu-btn').css({'display':'none'})
    $('nav').css({'left':'100vw'})
    $('.open-menu-btn').css({'display':'inline-block'})
  })


})

