/*PRODUCT */
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    /*
  {
    id: 1,
    title: "Obras",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/genero.jpg",
      },
      {
        code: "darkblue",
        img: "./img/gondola.jpg",
      },
      {
        code: "lightgray",
        img: "./img/genero2.jpg"
      },
      {
        code: "green",
        img: "./img/genero3.jpg"
      },
      {
        code: "red",
        img: "./img/genero4.jpg"
      },
      {
        code: "yellow",
        img: "./img/genero5.jpg"
      },
      {
        code: "lightblue",
        img: "./img/genero6.jpg"
      },
    ],
  },
  */
  {
    id: 1,
    title: "Paisajes",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/paisaje0.jpg",
      },
      {
        code: "darkblue",
        img: "./img/paisaje000.jpg",
      },
      {
        code: "lightgray",
        img: "./img/paisaje2.jpg"
      },
      {
        code: "green",
        img: "./img/paisaje3.jpg"
      },
      {
        code: "red",
        img: "./img/paisaje4.jpg"
      },
      {
        code: "yellow",
        img: "./img/paisaje5.jpg"
      },
      {
        code: "lightblue",
        img: "./img/paisaje6.jpg"
      },
    ],
  },
  /*
  {
    id: 3,
    title: "Marina",
    price: 149,
    colors: [
      {
        code: "black",
        img: "./img/marina.jpg",
      },
      {
        code: "darkblue",
        img: "./img/marina1.jpg",
      },
      {
        code: "lightgray",
        img: "./img/marina2.jpg"
      },
      {
        code: "green",
        img: "./img/marina3.jpg"
      },
      {
        code: "red",
        img: "./img/marina4.jpg"
      },
      {
        code: "yellow",
        img: "./img/marina5.jpg"
      },
      {
        code: "lightblue",
        img: "./img/marina6.jpg"
      },      
    ],
  },
  {
    id: 4,
    title: "Naturaleza",
    price: 109,
    colors: [
      {
        code: "black",
        img: "./img/natmuerta.jpg",
      },
      {
        code: "darkblue",
        img: "./img/natmuerta1.jpg",
      },
      {
        code: "lightgray",
        img: "./img/natmuerta2.jpg"
      },
      {
        code: "green",
        img: "./img/natmuerta3.jpg"
      },
      {
        code: "red",
        img: "./img/natmuerta4.jpg"
      },
      {
        code: "yellow",
        img: "./img/natmuerta5.jpg"
      },
      {
        code: "lightblue",
        img: "./img/natmuerta6.jpg"
      },
    ],
  },
  {
    id: 5,
    title: "Paisaje",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/paisaje0.jpg",
      },
      {
        code: "darkblue",
        img: "./img/paisaje1.jpg",
      },
      {
        code: "lightgray",
        img: "./img/paisaje2.jpg"
      },
      {
        code: "green",
        img: "./img/paisaje3.jpg"
      },
      {
        code: "red",
        img: "./img/paisaje4.jpg"
      },
      {
        code: "yellow",
        img: "./img/paisaje5.jpg"
      },
      {
        code: "lightblue",
        img: "./img/paisaje6.jpg"
      },
    ],
  },
  {
    id: 6,
    title: "Retrato",
    price: 99,
    colors: [
      {
        code: "black",
        img: "./img/retrato.jpg",
      },
      {
        code: "darkblue",
        img: "./img/retrato1.jpg",
      },
      {
        code: "lightgray",
        img: "./img/retrato2.jpg"
      },
      {
        code: "green",
        img: "./img/retrato3.jpg"
      },
      {
        code: "red",
        img: "./img/retrato4.jpg"
      },
      {
        code: "yellow",
        img: "./img/monet2.jpg"
      },
      {
        code: "lightblue",
        img: "./img/retrato6.jpg"
      },
    ],
  }, 
  */
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductColors = document.querySelectorAll(".color");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
/*
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
*/

/*PAYMENT*/
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

/*SLIDER*/ 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}