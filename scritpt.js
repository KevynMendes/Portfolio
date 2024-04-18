    var imagens = [
      "midia/img1.png",
      "midia/img2.png",
      "midia/img3.png",
      "midia/img4.png",
      "midia/img5.png",
      "midia/img6.png",
      "midia/img7.png",
      "midia/img8.png",
      "midia/img9.png",
      "assets/profile-picture.png",
    ];

    function preCarregarImagens() {
      for (var i = 0; i < imagens.length; i++) {
        var img = new Image();
        img.src = imagens[i];
      }
    }
    window.addEventListener('load', preCarregarImagens);