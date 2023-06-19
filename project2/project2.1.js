function swapImage(clickedImage) {
    var bigImage = document.querySelector(".big-image");
    var bigImageSrc = bigImage.src;
    bigImage.src = clickedImage.src;
    clickedImage.src = bigImageSrc;
  }
  