burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click',()=>{
    navlist.classList.toggle('vclass-resp');
    rightnav.classList.toggle('vclass-resp');
     navbar.classList.toggle('hnav-resp');

})


