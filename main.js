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

    // Add event listener to menu icon
    menu.addEventListener('click', () => {
        toggleClass(body, 'nav-active');

        if (body.classList.contains('nav-active')) {
            disableLinks();
        } else {
            enableLinks();
        }
    });

    // Add event listeners to menu items
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (event) {
            // Prevent default behavior if 'nav-active' class is not present
            if (!body.classList.contains('nav-active')) {
                event.preventDefault();
            }
        });
    });
}

init();
