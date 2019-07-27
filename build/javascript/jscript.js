const menu = document.getElementById('toggleMenu');
menu.addEventListener('click', openMenu);

const menuClose= document.getElementById('closeMenu');
menuClose.addEventListener('click', closeMenu);

function openMenu (){
    document.getElementById('sideMenu').style.width= '250px';
    document.getElementById('content').style.marginLeft= '250px';
};

function closeMenu (){
    document.getElementById('sideMenu').style.width= '0';
    document.getElementById('content').style.marginLeft= '0';
};




