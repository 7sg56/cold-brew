let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

var typed=new Typed(".input",{
    strings:["for hot days","made just for you","to fuel your grind","for cozy mornings"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1000,
    loop:true   
})