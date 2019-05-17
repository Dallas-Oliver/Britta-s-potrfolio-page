let gallery = document.querySelector(".gallery");
let showcase = document.querySelector(".showcase");
let showcaseImage = document.querySelector(".showcase-image");
let homeIcon = document.querySelector(".icon");
let aboutButton = document.getElementById("about");
let aboutSection = document.querySelector(".about-section");
let galleryInView = true;

function showEnlargedImage(imageUrl) {
  galleryInView = false;
  gallery.style.display = "none";
  showcase.style.opacity = "1";
  aboutButton.innerHTML = "gallery";
  showcaseImage.src = imageUrl;
  window.scrollTo(0, 0);
}

function returnHome() {
  galleryInView = true;
  gallery.style.display = "flex";
  aboutButton.innerHTML = "about";
  showcase.style.opacity = "0";
  showcaseImage.src = "";
  aboutSection.style.opacity = "0";
  gallery.style.opacity = "1";
}

function aboutView() {
  gallery.style.display = "none";
  aboutSection.style.opacity = "1";
  aboutButton.innerHTML = "gallery";
}

function changeView() {
  if (galleryInView) {
    aboutView();
    galleryInView = false;
    window.scrollTo(0, 0);
  } else if (galleryInView === false) {
    aboutButton.innerHTML = "about";
    galleryInView = true;
    returnHome();
  }
}
