let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menu.oneclick= () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll= () =>{

    menu.classList.remove('fa-times');
    menu.classList.remove('active');

    if (window.scrollY>60){
        document.querySelector('#scroll-top').classList.add('active');
    }
    else{
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

function loader (){
    document.querySelector('.loader-container').classList.add('fade-out')
}

function fadeOut(){
    setInterval(loader,300)

}

window.onload = fadeOut();