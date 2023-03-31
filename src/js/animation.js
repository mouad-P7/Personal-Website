window.onload = function() {
  // gsap code
  gsap.fromTo('code',{
    y: '-100%',
    opacity: 0,
  },{
    y: 0,
    opacity: 1,
    ease: 'power2',
    duration: 1, 
    delay: 1,
  });


  gsap.fromTo('h1, h2',{
    x: '-50%',
    opacity: 0,
  },{
    x: 0,
    opacity: 1,
    ease: 'power2',
    duration: 1, 
    delay: 1.3,
  });


  gsap.fromTo('p, button, .certif, .skill, .info',{
    x: '-50%',
    opacity: 0,
  },{
    x: 0,
    opacity: 1,
    ease: 'power2',
    duration: 1, 
    delay: 1.6,
  });
};


