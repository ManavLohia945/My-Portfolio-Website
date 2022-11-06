
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose= document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
} 

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
//When we click on any section example:Home or Portfolio the apps tab or nav-menu ID should be removed or hidden/discarded
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');

}
navLink.forEach(n => n.addEventListener('click',linkAction));


/*==================== SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

// console.log(skillsContent)
// console.log(skillsHeader)

function toggleSkills(){//when we click on the arrow icon this func will be executed
    let itemClass = this.parentNode.className; //this will store the parent class name ie.for the skill1 section "skills__content skills__open" will be stored
    //and for skill 2 and skill 3 "skills__content skills__close" value will be stored
    console.log(itemClass);
    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass == 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click',toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
     tabContents = document.querySelectorAll('[data-content]')

// console.log(tabs)
// console.log(tabContents)

tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
modalBtns = document.querySelectorAll('.services__button'),
modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
}) 


/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode:true,
    loop:true,

    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop:true,
    grabCurdor:true,
    spaceBetween:48,

    pagination:{
        el:'.swiper-pagination',
        clickable:true,
        dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidePreview:2
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/ 
//as we keep scrolling through each section observe the header/list elem at the navbar they change the color 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){  //when we are in light mode and when we scroll down a bit observe the navbar a line appears of width:100% 
    const nav = document.getElementById('header');
    //When the scroll is greater than 80 viewport height,add the scroll-header class
    if(this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    }
    else{
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('themebutton')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


//EMAIL JS JS CODE
function validate(){
    let email = document.querySelector('.email');
    let name = document.querySelector('.name');
    let mssg = document.querySelector('.message');
    let sendBtn = document.querySelector('.normal1');

    sendBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        if(email.value == "" || name.value=="" || mssg.value==""){
            emptyerror();
        }
        else{
            sendmail(name.value,email.value);
            success();
        }
    });
}

validate();

function sendmail(name,email){
    emailjs.send("service_gvs5yji","template_z92oiul",{
        from_name:"Manav",
        reply_to:name,
        to_name: email,
        
        });
}

function emptyerror(){
    swal("Oh No.....", "Fields cannot be empty!", "error");
}

function success(){
    swal("Good job!", "Email sent successfully.We try to reply in 24hrs", "success");
}