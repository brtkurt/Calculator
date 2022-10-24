let hero = document.querySelector(".hero");
let tl =new TimelineMax();
tl.fromTo(hero, 1.5 ,{height:"0%"},{height:"80%",ease: Power2.easeInOut} ).fromTo(hero,2,{width:"100%"},{width:"70%",ease: Power2.easeInOut});