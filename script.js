// Toggle submenus
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
const person = document.querySelector('.bi-person');
const logo = document.getElementById('Layer_1');
const page1 = document.querySelector('.video-spotlight');
const page2 = document.querySelector('.page-2');
const page3 = document.querySelector('.page-3');

menuIcon.addEventListener('click', () => {
    navMenu.style.display = 'block';
    menuTop.style.display = 'block';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'block';
    blackbox.style.display = 'none';
    iconlinks.style.display = 'none';
    person.style.display = 'none';
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
    person.style.display = 'block';
    logo.style.display = 'block';
    page1.style.display = 'block';
    page2.style.display = 'block';
    page3.style.display = 'block';
});

// Ensure the menu is hidden and the menu icon is shown when resizing to larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        navMenu.style.display = 'none';
        menuTop.style.display = 'none';
        menuIcon.style.display = 'none'; // Hide menu icon for larger screens
        closeIcon.style.display = 'none';
        blackbox.style.display = 'block';
        iconlinks.style.display = 'block';
        person.style.display = 'block';
        logo.style.display = 'block';
        page1.style.display = 'block';
        page2.style.display = 'block';
        page3.style.display = 'block';
    } else {
        menuIcon.style.display = 'block'; // Show menu icon for smaller screens
    }
});

// Ensure the menu is hidden on page load if the screen is larger than 1024px
window.addEventListener('load', () => {
    if (window.innerWidth > 1024) {
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

// Bottom Column Content

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




