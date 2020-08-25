function slider() {
  tns({
    container: ".slider",
     controls: true,
     slideBy: "page",
     items: 6,
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



