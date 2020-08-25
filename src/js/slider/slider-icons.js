function slider() {
  tns({
    container: ".slider",
     controls: true,
     slideBy: "page",
     items: 2,
     mouseDrag: true,
     swipeAngle: false,
     speed: 400,
     preventScrollOnTouch: "force",
     gutter: 30,
     autoWidth: true,
     responsive: {
      200: {
         controlsText: ['<', '>'],
      }
    }
  });
}

slider();



