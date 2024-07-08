document.querySelectorAll('.nav-menu > li > a').forEach(item => {
    item.addEventListener('click', () => {
        const submenu = item.nextElementSibling;
        const icon = item.querySelector('.toggle-icon');

        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
            icon.textContent = '+';
            item.classList.remove('submenu-visible');
        } else {
            submenu.style.display = 'block';
            icon.textContent = '-';
            item.classList.add('submenu-visible');
        }
    });
});

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navMenu = document.querySelector('.nav-menu');
const menuTop = document.querySelector('.menu-top');
const blackbox = document.querySelector('.black-box');
const iconlinks = document.querySelector('.icon-links');
const icons = document.querySelector('.icons');
const logo = document.getElementById('Layer_1');
const page1 = document.querySelector('.video-spotlight');
const page2 = document.querySelector('.page-2');
const page3 = document.querySelector('.page-3');

menuIcon.addEventListener('click', () => {
    navMenu.style.display = 'block';
    menuTop.style.display = 'block';
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    blackbox.style.display = 'none';
    iconlinks.style.display = 'none';
    icons.style.display = 'none';
    logo.style.display = 'none';
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
    navMenu.style.display = 'none';
    menuTop.style.display = 'none';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    blackbox.style.display = 'block';
    iconlinks.style.display = 'block';
    icons.style.display = 'block';
    logo.style.display = 'block';
    page1.style.display = 'block';
    page2.style.display = 'block';
    page3.style.display = 'block';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) {
        navMenu.style.display = 'none';
        menuTop.style.display = 'none';
        menuIcon.style.display = 'none'; 
        closeIcon.style.display = 'none';
        blackbox.style.display = 'block';
        iconlinks.style.display = 'block';
        icons.style.display = 'block';
        logo.style.display = 'block';
        page1.style.display = 'block';
        page2.style.display = 'block';
        page3.style.display = 'block';
    } else {
        menuIcon.style.display = 'block'; 
    }
});

window.addEventListener('load', () => {
    if (window.innerWidth > 1023) {
        navMenu.style.display = 'none';
        menuTop.style.display = 'none';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'none';
    } else {
        navMenu.style.display = 'none';
        menuTop.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

// Bottom Footer Content

document.addEventListener('DOMContentLoaded', function() {
    const footerTitles = document.querySelectorAll('.footer-title');

    footerTitles.forEach(title => {
        title.addEventListener('click', () => {
            const links = title.nextElementSibling;
            const icon = title.querySelector('.toggle-icon');

            if (links.classList.contains('show')) {
                links.classList.remove('show');
                icon.textContent = '+';
            } else {
                links.classList.add('show');
                icon.textContent = '-';
            }
        });
    });
});

