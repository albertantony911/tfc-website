// *******************
// Navigation
// *******************

/* Activate menu */

const menuBtn = document.getElementById("navtoggle");
const navBar = document.getElementById("nav-bar");
const navMain = document.getElementById("nav-main");
const navCta = document.getElementById("nav-cta");
const navContact = document.getElementById("nav-contact");
const navItems = gsap.utils.toArray(".nav-item");
let menuOpen = false;

const mm = gsap.matchMedia();

mm.add("(max-width: 860px)", () => {

    /* Activate menu */
    const mobileTl = gsap.timeline().reverse();

    mobileTl
        .add("start")
        .fromTo(
            navBar, {
                backgroundColor: "#161616",
                height: "75px",
            }, {
                height: "100vh",
                backgroundColor: "#fff",
                ease: "power2.out",
            },
            "start"
        )
        .to(
            ".st1", {
                fill: "#161616",
            },
            "start"
        )
        .to(
            ".line1", {
                strokeDasharray: "90 207",
                strokeDashoffset: "-134",
            },
            "start"
        )
        .to(
            ".line2", {
                strokeDasharray: "1 60",
                strokeDashoffset: "-30",
            },
            "start"
        )
        .to(
            ".line3", {
                strokeDasharray: "90 207",
                strokeDashoffset: "-134",
            },
            "start"
        )
        .to(
            ".line", {
                stroke: "#161616",
            },
            "start"
        )
        .fromTo(
            navMain, {
                display: "none",
            }, {
                display: "block",
                ease: "power2.out",
            }
        )
        .fromTo(
            navItems, {
                x: 50,
                autoAlpha: 0,
            }, {
                x: 0,
                autoAlpha: 1,
                ease: "power2.out",
                stagger: 0.075,
            }
        )
        .fromTo(
            navCta, {
                display: "none",
                autoAlpha: 0,
                y: +10,
            }, {
                display: "block",
                autoAlpha: 1,
                y: 0,
                ease: "power2.out",
            }
        )
        .fromTo(
            navContact, {
                display: "none",
                autoAlpha: 0,
                y: +10,
            }, {
                display: "block",
                autoAlpha: 1,
                y: 0,
                ease: "power2.out",
            }
        );

    menuBtn.addEventListener("click", () => {

        menuOpen ? mobileTl.timeScale(4).reversed(menuOpen) : mobileTl.timeScale(1).reversed(menuOpen)

        menuOpen = !menuOpen

        document.body.classList.toggle("lock-scroll");
        navBar.classList.toggle("unlock-scroll");
    });

    mobileTl.pause(0).reverse();
    return () => {
        mobileTl.pause(0).reverse();
        menuOpen = false;
        document.body.classList.remove("lock-scroll");
        navBar.classList.remove("unlock-scroll");
    };
});

/* Activate submenu */

function toggleMenu(el) {
    if (el.classList.contains("selected")) {
        el.classList.remove("selected");
        el.classList.add("unselected");
    } else {
        for (const child of document.getElementById("nav-main").children) {
            child.classList.remove("selected");
            child.classList.add("unselected");
        }
        el.classList.remove("unselected");
        el.classList.add("selected");
    }
}

// /* Close Submenu From Anywhere */

var dropdowns = document.getElementById("dropdown");

function removeClass() {
    dropdowns.classList.remove("selected");
}

document.addEventListener("click", function (event) {
    var isClickInside = dropdowns.contains(event.target);

    if (!isClickInside) {
        removeClass();
    }
});

/* Activate submenu */

function toggleMenu(el) {
    if (el.classList.contains("selected")) {
        el.classList.remove("selected");
        el.classList.add("unselected");
    } else {
        for (const child of document.getElementById("nav-main").children) {
            child.classList.remove("selected");
            child.classList.add("unselected");
        }
        el.classList.remove("unselected");
        el.classList.add("selected");
    }
}

// /* Close Submenu From Anywhere */

var dropdowns = document.getElementById("dropdown");

function removeClass() {
    dropdowns.classList.remove("selected");
}

document.addEventListener("click", function (event) {
    var isClickInside = dropdowns.contains(event.target);

    if (!isClickInside) {
        removeClass();
    }
});