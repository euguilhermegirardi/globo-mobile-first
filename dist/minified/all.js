var icon=document.querySelector(".navbar-mobile__menu--open"),menu=document.querySelector(".navbar-mobile__menu"),close=document.querySelector(".navbar-mobile__menu--close");function cards(){tns({container:".cards-slider",controls:!1,slideBy:"page",items:2,mouseDrag:!0,swipeAngle:!1,speed:500,preventScrollOnTouch:"force",gutter:20,edgePadding:20,autoWidth:!0})}function slider(){tns({container:".slider",controls:!0,slideBy:"page",items:2,mouseDrag:!0,swipeAngle:!1,speed:400,preventScrollOnTouch:"force",gutter:30,autoWidth:!0,responsive:{200:{controlsText:["<",">"]}}})}function topglobo(){tns({container:".topglobo-slider",controls:!1,items:1,speed:300,autoplay:!1,autoplayHoverPause:!1,autoplayTimeout:5e3,autoplayButtonOutput:!1,swipeAngle:!1,mouseDrag:!0,nav:!1,fixedWidth:750,gutter:20,preventScrollOnTouch:"auto",responsive:{480:{fixedWidth:450},300:{fixedWidth:290}}})}icon&&icon.addEventListener("click",e=>{e.preventDefault(),menu.style.width="25rem"}),close&&close.addEventListener("click",e=>{e.preventDefault(),menu.style.width="0"}),cards(),slider(),topglobo();