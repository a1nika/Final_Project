//navbar style//
let menu = document.getElementById('menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
//window updown scroller//
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
//home.php swiper (type navigation)//
var swiper = new Swiper(".home-slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//pacages load more btn//
let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;
loadMoreBtn.onclick = () => {
    let boxes = document.querySelectorAll('.packages .box-container .box');
    for (var i = currentItem; i < currentItem + 3; i++) {
        if (boxes[i]) {
            boxes[i].style.display = 'inline-block';
        }
    }
    currentItem += 3;
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
};


