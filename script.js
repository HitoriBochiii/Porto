function hamburg(){
    const navbar = document.querySelector(".dropdown");
    const naveffect = document.querySelector("nav"); // Select the nav element
    navbar.style.transform = "translateY(0px)";
    naveffect.style.backdropFilter = "none";
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    const naveffect = document.querySelector("nav");
    navbar.style.transform = "translateY(-500px)"
    naveffect.style.backdropFilter = "blur(3px)";
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    const naveffect = document.querySelector("nav");
    navbar.style.transform = "translateY(-500px)";
    naveffect.style.backdropFilter = "blur(3px)";
}
// Typewriter Effect
const texts = [
    "College Student",
    "Developer",
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween : 32,
    slidesPerView: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });