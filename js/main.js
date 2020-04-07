import jump from 'jump.js'
import AOS from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const heroBtn = document.querySelector('.hero-btn');
const infoBtn = document.querySelector('.info-btn');
const kursBtn = document.querySelector('.kurs-btn');
const contactBtn = document.querySelector('.contact-btn')
heroBtn.addEventListener('click', ()=> jump('.hero-target'));
infoBtn.addEventListener('click', ()=> jump('.info-target'));
kursBtn.addEventListener('click', ()=>jump('.kurs-target'))
contactBtn.addEventListener('click', ()=>jump('.contact-target'))

const preloader = document.querySelector(".preloader")
window.addEventListener('load',()=>{
    setTimeout(() => {
        preloader.classList.add("preloaderdone")
    }, 100);
})