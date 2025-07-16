import {
    T as o,
    j as u,
    U as f,
    k as d,
    A as v,
    V as l,
    W as i,
    X as h,
    Y as m
} from "./entry.OdvjO7iF.js";

function I(t, a = {}) {
    const e = a.head || o();
    if (e) return e.ssr ? e.push(t, a) : p(e, t, a)
}

function p(t, a, e = {}) {
    const s = u(!1),
        n = u({});
    f(() => {
        n.value = s.value ? {} : m(a)
    });
    const r = t.push(n.value, e);
    return d(n, c => {
        r.patch(c)
    }), h() && (v(() => {
        r.dispose()
    }), l(() => {
        s.value = !0
    }), i(() => {
        s.value = !1
    })), r
}
export {
    I as u
};