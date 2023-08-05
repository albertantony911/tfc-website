function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)) {
        element.classList.remove(stringClass);
    } else {
        element.classList.add(stringClass);
    }
}

function disableLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(function (link) {
        link.href = 'javascript:void(0)';
    });
}

function enableLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(function (link) {
        link.href = link.getAttribute('data-original-href');
    });
}

function init() {
    let body = document.querySelector('body');
    let menu = document.querySelector('.menu-icon');
    let menuItems = document.querySelectorAll('.nav__list-item');

    menu.addEventListener('click', () => {
        toggleClass(body, 'nav-active');

        // When 'nav-active' class is added, disable links
        if (body.classList.contains('nav-active')) {
            disableLinks();
        } else {
            // When 'nav-active' class is removed, enable links
            enableLinks();
        }
    });
}

init();
