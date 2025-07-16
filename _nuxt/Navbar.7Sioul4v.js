import {
    f as i,
    h as r,
    o as c,
    c as d,
    a as s,
    g as e
} from "./entry.OdvjO7iF.js";
const p = "" + globalThis.__publicAssetsURL("assets/imgs/logo-light.png"),
    g = "" + globalThis.__publicAssetsURL("assets/imgs/menu/1.png"),
    m = "" + globalThis.__publicAssetsURL("assets/imgs/menu/2.png"),
    u = "" + globalThis.__publicAssetsURL("assets/imgs/menu/3.png"),
    h = "" + globalThis.__publicAssetsURL("assets/imgs/menu/4.png"),
    v = "" + globalThis.__publicAssetsURL("assets/imgs/menu/5.png"),
    _ = {
        class: "navbar navbar-expand-lg bord blur"
    },
    f = {
        class: "container o-hidden"
    },
    b = e('<a class="logo icon-img-100" href="#"><img src="' + p + '" alt="logo"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"><i class="fas fa-bars"></i></span></button>', 2),
    w = {
        class: "collapse navbar-collapse justify-content-center",
        id: "navbarSupportedContent"
    },
    x = {
        class: "navbar-nav"
    },
    M = s("a", {
        class: "nav-link dropdown-toggle",
        "data-toggle": "dropdown",
        href: "#",
        role: "button",
        "aria-haspopup": "true",
        "aria-expanded": "false"
    }, [s("span", {
        class: "rolling-text"
    }, "Demos")], -1),
    S = e('<div class="dropdown-menu mega-menu"><div class="container"><div class="row"><div class="col-lg"><a class="item-img text-center" href="/home-main"><span class="img"><img src="' + g + '" alt=""></span><span class="mt-15">Main Home</span></a></div><div class="col-lg"><a class="item-img text-center" href="/home-modern-studio"><span class="img"><img src="' + m + '" alt=""></span><span class="mt-15">Modern Studio</span></a></div><div class="col-lg"><a class="item-img text-center" href="/home-creative-agency"><span class="img"><img src="' + u + '" alt=""></span><span class="mt-15">Creative Agency</span></a></div><div class="col-lg"><a class="item-img text-center" href="/home-digital-agency"><span class="img"><img src="' + h + '" alt=""></span><span class="mt-15">Digital Agency</span></a></div><div class="col-lg"><a class="item-img text-center" href="/home-personal"><span class="img"><img src="' + v + '" alt=""></span><span class="mt-15">Freelancer</span></a></div></div></div></div>', 1),
    y = [M, S],
    L = s("a", {
        class: "nav-link dropdown-toggle",
        "data-toggle": "dropdown",
        href: "#",
        role: "button",
        "aria-haspopup": "true",
        "aria-expanded": "false"
    }, [s("span", {
        class: "rolling-text"
    }, "Pages")], -1),
    T = e('<ul class="dropdown-menu"><li><a class="dropdown-item" href="/page-about"> About Us </a></li><li><a class="dropdown-item" href="/page-services"> Services </a></li><li><a class="dropdown-item" href="/page-services-details"> Services Details </a></li><li><a class="dropdown-item" href="/page-team"> Our Team </a></li><li><a class="dropdown-item" href="/page-team-details"> Team Details </a></li><li><a class="dropdown-item" href="/page-contact"> Contact Us </a></li><li><a class="dropdown-item" href="/page-FAQ"> FAQS </a></li><li><a class="dropdown-item" href="/page-404"> Error 404 </a></li></ul>', 1),
    A = [L, T],
    C = s("a", {
        class: "nav-link dropdown-toggle",
        "data-toggle": "dropdown",
        href: "#",
        role: "button",
        "aria-haspopup": "true",
        "aria-expanded": "false"
    }, [s("span", {
        class: "rolling-text"
    }, "Portfolio")], -1),
    U = e('<div class="dropdown-menu"><a class="dropdown-item" href="/portfolio-gallery"> Gallery </a><a class="dropdown-item" href="/portfolio-creative"> Portfolio Creative </a><a class="dropdown-item" href="/portfolio-creative-carousel"> Creative Carousel </a><a class="dropdown-item" href="/portfolio-grid"> Portfolio Grid </a><a class="dropdown-item" href="/portfolio-masonry"> Portfolio Masonry </a><a class="dropdown-item" href="/project-details"> Project Details </a></div>', 1),
    D = [C, U],
    k = s("a", {
        class: "nav-link dropdown-toggle",
        "data-toggle": "dropdown",
        href: "#",
        role: "button",
        "aria-haspopup": "true",
        "aria-expanded": "false"
    }, [s("span", {
        class: "rolling-text"
    }, "Blogs")], -1),
    B = e('<div class="dropdown-menu"><a class="dropdown-item" href="/blog-classic"> Blog Standerd </a><a class="dropdown-item" href="/blog-grid-sidebar"> Grid With Sidebar </a><a class="dropdown-item" href="/blog-grid-3column"> Grid Three Column </a><a class="dropdown-item" href="/blog-details"> Blog Details </a></div>', 1),
    P = [k, B],
    R = s("li", {
        class: "nav-item"
    }, [s("a", {
        class: "nav-link",
        href: "/page-contact"
    }, [s("span", {
        class: "rolling-text"
    }, "Contact Us")])], -1),
    E = s("div", {
        class: "contact-button"
    }, [s("a", {
        href: "/page-contact",
        class: "butn butn-sm butn-bg main-colorbg radius-5"
    }, [s("span", {
        class: "text"
    }, "Let's contact")])], -1),
    q = {
        __name: "Navbar",
        setup(G) {
            function n() {
                const a = window.scrollY,
                    l = document.querySelector(".navbar");
                a > 300 ? l.classList.add("nav-scroll") : l.classList.remove("nav-scroll")
            }

            function o(a) {
                a.currentTarget.querySelector(".dropdown-menu").classList.add("show")
            }

            function t(a) {
                a.currentTarget.querySelector(".dropdown-menu").classList.remove("show")
            }
            return i(() => {
                window.addEventListener("scroll", n)
            }), r(() => {
                window.removeEventListener("scroll", n)
            }), (a, l) => (c(), d("nav", _, [s("div", f, [b, s("div", w, [s("ul", x, [s("li", {
                onMousemove: o,
                onMouseleave: t,
                class: "nav-item dropdown"
            }, y, 32), s("li", {
                onMousemove: o,
                onMouseleave: t,
                class: "nav-item dropdown"
            }, A, 32), s("li", {
                onMousemove: o,
                onMouseleave: t,
                class: "nav-item dropdown"
            }, D, 32), s("li", {
                onMousemove: o,
                onMouseleave: t,
                class: "nav-item dropdown"
            }, P, 32), R])]), E])]))
        }
    };
export {
    q as _, p as a
};