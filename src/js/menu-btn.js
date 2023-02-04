$(document).ready(function(){


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

