const sideBar = document.getElementById('sidebar-menu'),
openBar = document.getElementById('hamburger')

openBar.addEventListener('click', function(){
    sideBar.classList.toggle('open-close')
    hamicon.classList.toggle('fa-times')
})

const remover = document.querySelectorAll('.sidebar-a')

remover.forEach(item =>{
    item.addEventListener('click', function(){
        sideBar.classList.remove('open-close')
        hamicon.classList.remove('fa-times')
    })
})



const links = document.querySelectorAll('.pf-filter-li')
const content = document.querySelectorAll('.portfolio-link')

links.forEach(li =>{
    li.addEventListener('click', ()=>{
        links.forEach(li =>{
            li.className = "pf-filter-li"
        })

        li.className = "activate pf-filter-li"

        let values = li.textContent
        content.forEach(item =>{
            item.style.display = "none";
            if(item.getAttribute('data-id') === values || values === "all"){
                item.style.display = "flex"
            }
        })
    })
})



const intro_start = document.querySelector('.intro-name');
const img_start = document.querySelector('.intro-img');
const list_start = document.querySelector('.intro-list');
const button_start = document.querySelector('.intro-resume');

const tl = new TimelineMax();

tl.fromTo(intro_start, 1, {y: "-100%"}, {y: "0%"})
.fromTo(img_start, 2, {opacity: 0}, {opacity:1 })
.fromTo(img_start, 1,{rotation: 0}, {rotation: 360},"-=2")
.fromTo(list_start, 2,{opacity: 0, x:40}, {opacity:1, x:0},"-=2")
.fromTo(button_start, 1, {opacity: 0, x: 30, rotation:-10}, {opacity:1, x:0 , rotation:0},"-=1");



const intro = document.getElementById('home-a');

intro.addEventListener('click', function() {

    const intro = document.querySelector('.intro-name');
    const img = document.querySelector('.intro-img');
    const list = document.querySelector('.intro-list');
    const button = document.querySelector('.intro-resume');

    const tl = new TimelineMax();

    tl.fromTo(intro, 1, {y: "-100%"}, {y: "0%"})
    .fromTo(img, 2, {opacity: 0}, {opacity:1 })
    .fromTo(img, 1,{rotation: 0}, {rotation: 360},"-=2")
    .fromTo(list, 2,{opacity: 0, x:40}, {opacity:1, x:0},"-=2")
    .fromTo(button, 1, {opacity: 0, x: 30, rotation:-10}, {opacity:1, x:0 , rotation:0},"-=1");
})



const about = document.getElementById('about-a');

about.addEventListener('click', function() {

    const aboutStart = document.getElementById('about')
    const slovak = document.getElementById('slovak')
    const english = document.getElementById('english')
    const spanish = document.getElementById('spanish')

    aboutStart.classList.remove('about-animation')
    slovak.classList.remove('slovak-animation')
    english.classList.remove('english-animation')
    spanish.classList.remove('spanish-animation')

    window.requestAnimationFrame(function() {
        aboutStart.classList.add('about-animation')
        slovak.classList.add('slovak-animation')
        english.classList.add('english-animation')
        spanish.classList.add('spanish-animation')
    });
})



const skills = document.getElementById('skills-a');

skills.addEventListener('click', function() {

    const aboutSkills = document.getElementById('skills')
    const web = document.getElementById('web')
    const ds = document.getElementById('ds')
    const ide = document.getElementById('ide')
    const other = document.getElementById('other')

    aboutSkills.classList.remove('about-animation')
    web.classList.remove('animation-web')
    ds.classList.remove('animation-ds')
    ide.classList.remove('animation-ide')
    other.classList.remove('animation-other')
    
    window.requestAnimationFrame(function() {
        aboutSkills.classList.add('about-animation')
        web.classList.add('animation-web')
        ds.classList.add('animation-ds')
        ide.classList.add('animation-ide')
        other.classList.add('animation-other')
    });
})



const experiences = document.getElementById('experiences-a');

experiences.addEventListener('click', function() {

    const aboutExper = document.getElementById('experiences')

    aboutExper.classList.remove('about-animation')
    
    window.requestAnimationFrame(function() {
        aboutExper.classList.add('about-animation')
    });
})

const portfolio = document.getElementById('portfolio-a');

portfolio.addEventListener('click', function() {

    const aboutPortfolio = document.getElementById('portfolio')

    aboutPortfolio.classList.remove('about-animation')
    
    window.requestAnimationFrame(function() {
        aboutPortfolio.classList.add('about-animation')
    });
})

const contact = document.getElementById('contact-a');

contact.addEventListener('click', function() {

    const aboutContact = document.getElementById('contact')

    aboutContact.classList.remove('about-animation')
    
    window.requestAnimationFrame(function() {
        aboutContact.classList.add('about-animation')
    });
})
