import {
    _ as g,
    o as d,
    c as p,
    a as t,
    f as u
} from "./entry.OdvjO7iF.js";
const y = {},
    w = {
        class: "lines"
    },
    x = t("span", null, null, -1),
    L = t("span", null, null, -1),
    E = t("span", null, null, -1),
    $ = t("span", null, null, -1),
    S = t("span", null, null, -1),
    k = [x, L, E, $, S];

function q(c, o) {
    return d(), p("div", w, k)
}
const I = g(y, [
        ["render", q]
    ]),
    B = () => {
        let c = 150,
            o = document.querySelector(".progress-wrap"),
            e = document.querySelector(".progress-wrap path"),
            n = e.getTotalLength();
        const r = () => {
            let s = window.scrollY,
                a = document.documentElement.scrollHeight - window.innerHeight,
                l = n - s * n / a;
            e.style.strokeDashoffset = l
        };
        o && (e.style.transition = e.style.WebkitTransition = "none", e.style.strokeDasharray = n + " " + n, e.style.strokeDashoffset = n, e.getBoundingClientRect(), e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear", r(), window.addEventListener("scroll", r), window.addEventListener("scroll", function() {
            window.pageYOffset > c ? o.classList.add("active-progress") : document.querySelector(".progress-wrap").classList.remove("active-progress")
        }), o.addEventListener("click", function(s) {
            return s.preventDefault(), window.scrollTo({
                top: 0,
                behavior: "smooth"
            }), !1
        }))
    },
    M = {
        class: "progress-wrap cursor-pointer"
    },
    H = t("svg", {
        class: "progress-circle svg-content",
        width: "100%",
        height: "100%",
        viewBox: "-1 -1 102 102"
    }, [t("path", {
        d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
    })], -1),
    T = [H],
    P = {
        __name: "ProgressScroll",
        setup(c) {
            return u(() => {
                B()
            }), (o, e) => (d(), p("div", M, T))
        }
    },
    b = {
        class: "cursor"
    },
    Z = {
        __name: "cusor",
        setup(c) {
            return u(() => {
                const o = document.querySelectorAll(".hover-this"),
                    e = document.querySelector(".cursor"),
                    n = function(s) {
                        const a = this.querySelector(".hover-anim"),
                            {
                                offsetX: l,
                                offsetY: _
                            } = s,
                            {
                                offsetWidth: h,
                                offsetHeight: f
                            } = this,
                            i = 25,
                            m = l / h * (i * 2) - i,
                            v = _ / f * (i * 2) - i;
                        a.style.transform = `translate(${m}px, ${v}px)`, s.type === "mouseleave" && (a.style.transform = "")
                    },
                    r = s => {
                        const {
                            clientX: a,
                            clientY: l
                        } = s;
                        e.style.left = a + "px", e.style.top = l + "px"
                    };
                o.forEach(s => s.addEventListener("mousemove", n)), o.forEach(s => s.addEventListener("mouseleave", n)), window.addEventListener("mousemove", r), document.querySelectorAll("a, .cursor-pointer").forEach(s => {
                    s.addEventListener("mousemove", () => {
                        e.classList.add("cursor-active")
                    }), s.addEventListener("mouseleave", () => {
                        e.classList.remove("cursor-active")
                    })
                })
            }), (o, e) => (d(), p("div", b))
        }
    },
    A = {
        class: "loader-wrap"
    },
    D = t("svg", {
        viewBox: "0 0 1000 1000",
        preserveAspectRatio: "none"
    }, [t("path", {
        id: "svg",
        d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z"
    })], -1),
    V = t("div", {
        class: "loader-wrap-heading"
    }, [t("span", null, [t("h2", {
        class: "load-text"
    }, [t("span", null, "L"), t("span", null, "o"), t("span", null, "a"), t("span", null, "d"), t("span", null, "i"), t("span", null, "n"), t("span", null, "g")])])], -1),
    W = [D, V],
    C = {
        __name: "loader",
        setup(c) {
            return u(() => {
                const o = document.getElementById("svg"),
                    e = gsap.timeline(),
                    n = "M0 502S175 272 500 272s500 230 500 230V0H0Z",
                    r = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
                e.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
                    delay: 1.5,
                    y: -100,
                    opacity: 0
                }), e.to(o, {
                    duration: .5,
                    attr: {
                        d: n
                    },
                    ease: "power2.easeIn"
                }).to(o, {
                    duration: .5,
                    attr: {
                        d: r
                    },
                    ease: "power2.easeOut"
                }), e.to(".loader-wrap", {
                    y: -1500
                }), e.to(".loader-wrap", {
                    zIndex: -1,
                    display: "none"
                }), e.from("header", {
                    y: 200
                }, "-=1.5"), e.from("header .container", {
                    y: 40,
                    opacity: 0,
                    delay: .3
                }, "-=1.5")
            }), (o, e) => (d(), p("div", A, W))
        }
    };
export {
    I as L, C as _, Z as a, P as b
};