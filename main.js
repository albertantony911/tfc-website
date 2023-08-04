function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)) {
        element.classList.remove(stringClass);
    } else {
        element.classList.add(stringClass);
    }
}

function init() {
    let body = document.querySelector('body');
    let menu = document.querySelector('.menu-icon');
    let menuItems = document.querySelectorAll('.nav__list-item');

    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
}

init();