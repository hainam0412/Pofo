var headerCarousel = document.querySelector("header .main-carousel");
var flkty1 = new Flickity(headerCarousel, {
  // options
  cellAlign: "left",
  contain: true,
  autoPlay: 4000,
  wrapAround: true,
});

var userCarousel = document.querySelector(".user-commend .main-carousel");
var flkty2 = new Flickity(userCarousel, {
  // options
  cellAlign: "left",
  contain: true,

  wrapAround: true,
});

var brandCarousel = document.querySelector(".brand .main-carousel");
var flkty3 = new Flickity(brandCarousel, {
  // options
  cellAlign: "left",
  contain: true,

  wrapAround: false,
});

const productGrids = document.querySelectorAll(".product__grid");
const productControls = document.getElementsByName("product-control");

function checkProductActive(index) {
  for (let i = 0; i < productGrids.length; i++) {
    let gridItem = productGrids[i];

    if (index == i) {
      productGrids[i].classList.add("product__grid-active");
    } else {
      productGrids[i].classList.remove("product__grid-active");
    }
  }
}

function checkIndex() {
  for (let i = 0; i < productGrids.length; i++) {
    if (productGrids[i].classList.contains("product__grid-active")) {
      productControls[i].checked = true;
    } else {
      productControls[i].checked = false;
    }
  }
}

checkIndex();

for (let i = 0; i < productControls.length; i++) {
  let input = productControls[i];

  input.addEventListener("click", changeProductGrid);
}

function changeProductGrid(e) {
  let input = e.target;

  checkProductActive(input.value);
}

const navLinks = document.querySelectorAll(".nav__links-link");
const nav = document.querySelector(".nav");

if (window.innerWidth < 992) {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("nav__link-hover");
  }
}

const toTopButton = document.querySelector(".btn-to-top");

window.addEventListener("scroll", () => {
  if (pageYOffset == 0) {
    nav.classList.remove("nav-sticky");
    nav.classList.remove("nav-static");
    toTopButton.classList.remove("btn-to-top-show");

    document.querySelector(".nav__logo").innerHTML = ` <a href="index.html">
    <img class="full-percent" src="./resource/lib/logo/logo-white.png" alt="logo" />
  </a>`;
  }

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    toTopButton.classList.add("btn-to-top-show");
  } else {
    toTopButton.classList.remove("btn-to-top-show");
  }
});

toTopButton.addEventListener("click", scrollTop);

function scrollTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let imagesLib = document.querySelectorAll(".product__grid-item img");

for (image of imagesLib) {
  image.classList.add("lazyload");
}
