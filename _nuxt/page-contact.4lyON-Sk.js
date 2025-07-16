import {
    u as p
} from "./vue.f36acd1f.9fTzHtOo.js";
import {
    _ as h,
    a as f,
    b as v,
    L as g
} from "./loader.eHHXqPnj.js";
import {
    F as b
} from "./Footer.jz_JYekB.js";
import {
    _ as x
} from "./Navbar.7Sioul4v.js";
import {
    l as $
} from "./loadBackgroudImages.z1ewHQoT.js";
import {
    f as _,
    o as n,
    c as r,
    g as u,
    j as w,
    a as s,
    n as c,
    v as l,
    d as S,
    b as a,
    u as t,
    F as j
} from "./entry.OdvjO7iF.js";
const V = {
        class: "header page-header bg-img section-padding valign",
        "data-background": "/assets/imgs/background/bg4.jpg",
        "data-overlay-dark": "8"
    },
    k = u('<div class="container pt-80"><div class="row"><div class="col-12"><div class="text-center"><h1 class="text-u ls1 fz-80"> Get In <span class="fw-200"> Touch</span></h1></div></div></div></div>', 1),
    T = [k],
    B = {
        __name: "Header",
        setup(d) {
            return _(() => {
                $()
            }), (e, m) => (n(), r("header", V, T))
        }
    },
    U = {
        class: "contact section-padding"
    },
    y = {
        class: "container"
    },
    F = {
        class: "row"
    },
    N = u('<div class="col-lg-4 valign"><div class="sec-head info-box full-width md-mb80"><div class="phone fz-30 fw-600 underline main-color"><a href="tel:+18408412569">+1 840 841 25 69</a></div><div class="morinfo mt-50 pb-30 bord-thin-bottom"><h6 class="mb-15">Address</h6><p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p></div><div class="morinfo mt-30 pb-30 bord-thin-bottom"><h6 class="mb-15">Email</h6><p>Support@UiCamp.com</p></div><div class="social-icon mt-50"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-dribbble"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="#0"><i class="fab fa-instagram"></i></a></div></div></div>', 1),
    q = {
        class: "col-lg-7 offset-lg-1 valign"
    },
    z = {
        class: "full-width"
    },
    C = s("div", {
        class: "sec-head mb-50"
    }, [s("h6", {
        class: "sub-title main-color mb-15"
    }, "Let‘s Chat"), s("h3", {
        class: "text-u ls1"
    }, [S(" Send a "), s("span", {
        class: "fw-200"
    }, "message")])], -1),
    L = {
        class: "form2"
    },
    M = s("div", {
        class: "messages"
    }, null, -1),
    E = {
        class: "controls row"
    },
    D = {
        class: "col-lg-6"
    },
    H = {
        class: "form-group mb-30"
    },
    I = {
        class: "col-lg-6"
    },
    A = {
        class: "form-group mb-30"
    },
    G = {
        class: "col-12"
    },
    P = {
        class: "form-group mb-30"
    },
    J = {
        class: "col-12"
    },
    K = {
        class: "form-group"
    },
    O = s("div", {
        class: "mt-30"
    }, [s("button", {
        type: "submit",
        class: "butn butn-full butn-bord radius-30"
    }, [s("span", {
        class: "text"
    }, "Let‘s Talk")])], -1),
    Q = {
        __name: "Contact",
        setup(d) {
            const e = w({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            return (m, o) => (n(), r("section", U, [s("div", y, [s("div", F, [N, s("div", q, [s("div", z, [C, s("form", L, [M, s("div", E, [s("div", D, [s("div", H, [c(s("input", {
                "onUpdate:modelValue": o[0] || (o[0] = i => e.value.name = i),
                type: "text",
                name: "name",
                placeholder: "Name",
                required: ""
            }, null, 512), [
                [l, e.value.name]
            ])])]), s("div", I, [s("div", A, [c(s("input", {
                "onUpdate:modelValue": o[1] || (o[1] = i => e.value.email = i),
                type: "email",
                name: "email",
                placeholder: "Email",
                required: ""
            }, null, 512), [
                [l, e.value.email]
            ])])]), s("div", G, [s("div", P, [c(s("input", {
                "onUpdate:modelValue": o[2] || (o[2] = i => e.value.subject = i),
                type: "text",
                name: "subject",
                placeholder: "Subject"
            }, null, 512), [
                [l, e.value.subject]
            ])])]), s("div", J, [s("div", K, [c(s("textarea", {
                "onUpdate:modelValue": o[3] || (o[3] = i => e.value.message = i),
                name: "message",
                placeholder: "Message",
                rows: "4",
                required: ""
            }, null, 512), [
                [l, e.value.message]
            ])]), O])])])])])])])]))
        }
    },
    R = {
        class: "google-map"
    },
    W = "https://maps.google.com/maps?q=hollwood&t=&z=11&ie=UTF8&iwloc=&output=embed",
    X = {
        __name: "Map",
        setup(d) {
            return (e, m) => (n(), r("div", R, [s("iframe", {
                id: "gmap_canvas",
                src: W
            })]))
        }
    },
    Y = {
        id: "smooth-wrapper"
    },
    Z = {
        id: "smooth-content"
    },
    ss = {
        class: "main-bg o-hidden"
    },
    ls = {
        __name: "page-contact",
        setup(d) {
            return p({
                script: [{
                    src: "/assets/js/smoother-script.js",
                    defer: !0
                }]
            }), _(() => {
                gsap.registerPlugin(ScrollTrigger, ScrollSmoother), ScrollTrigger.normalizeScroll(!0), ScrollSmoother.create({
                    smooth: 2,
                    effects: !0
                })
            }), (e, m) => (n(), r(j, null, [a(t(h)), a(t(f)), a(t(v)), a(t(g)), a(t(x)), s("div", Y, [s("div", Z, [s("main", ss, [a(t(B)), a(t(Q)), a(t(X))]), a(t(b))])])], 64))
        }
    };
export {
    ls as
    default
};