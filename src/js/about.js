// import js
import './preloader';
import './menu-btn';

// import styles
import '../scss/style.scss';

// import images
import '../images/favicon.png';
import '../images/personal-img.jpg';
import '../images/jquery-icon.png';
import '../images/webpack-icon.png';
import '../images/openclassrooms-icon.png';

// import videos
import '../videos/personal-website.mp4';
import '../videos/riot-games.mp4';
import '../videos/social-media-dashboard.mp4';

// import files
 import '../pdf/cv.pdf'


$(document).ready(function(){


  function videoToRender(elementText){
    let id = '';
    switch(elementText){
      case 'Personal website': 
        id = 'personal-website-url';
        break;
      case 'Social media dashboard':
        id = 'social-media-dashboard-url';
        break;
      case 'Riot games clone':
        id = 'riot-games-url';
        break;
    }
    return id;
  }
  $('.project').hover(function(){
    let projectId = videoToRender($(this).find('span').text());
    $('#'+projectId).css({'display':'inline-block'});
    $(this).data('projectId', projectId);
  }, function(){
    $('#'+$(this).data('projectId')).css({'display':'none'});
    $(this).data('projectId', '');
  });


})