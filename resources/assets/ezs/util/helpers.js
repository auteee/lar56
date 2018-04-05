export function loadScript(src, callback) {
    if (!(typeof callback === 'function')) {
        callback = function() {};
    }
    let check = document.querySelectorAll("script[src='" + src + "']");
    if (check.length > 0) {
        check[0].addEventListener('load', function() {
            callback();
        });
        callback();
        return;
    }
    let script = document.createElement('script');
    let head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = src;
    if (script.addEventListener) {
        script.addEventListener('load', function () {
            callback();
        }, false);
    }else if (script.attachEvent) {
        script.attachEvent('onreadystatechange', function () {
            let target = window.event.srcElement;
            if (target.readyState === 'loaded') {
                callback();
            }
        });
    }
    head.appendChild(script);
}
// <link href="https://cdn.bootcss.com/highlight.js/9.12.0/styles/agate.min.css" rel="stylesheet">
export function loadLink(src, callback) {
    if (!(typeof callback === 'function')) {
        callback = function() {};
    }
    let check = document.querySelectorAll("link[href='" + src + "']");
    if (check.length > 0) {
        callback();
        return;
    }
    let link = document.createElement('link');
    let head = document.getElementsByTagName('head')[0];
    link.rel = 'stylesheet';
    link.href = src;
    if (link.addEventListener) {
        link.addEventListener('load', function () {
            callback();
        }, false);
    } else if (link.attachEvent) {
        link.attachEvent('onreadystatechange', function () {
            let target = window.event.srcElement;
            if (target.readyState === 'loaded') {
                callback();
            }
        });
    }
    head.appendChild(link);
}

export function createSimpleFunctional (c, el = 'div', name) {
    name = name || c.replace(/__/g, '-');

    return {
        name: `e-${name}`,
        functional: true,
        props: {
            cs: String
        },
        render: (h, { data,props, children }) => {
            data.staticClass = (`${c} ${data.staticClass || ''}`).trim();
            if (props.cs){
                data.staticClass += ' ';
                data.staticClass += props.cs;
            } 
            return h(el, data, children)
        }
    }
}
export function createSimpleTransition (name, origin = 'top center 0', mode) {
    return {
        name,

        functional: true,

        props: {
            origin: {
                type: String,
                default: origin
            }
        },

        render (h, context) {
            context.data = context.data || {};
            context.data.props = { name };
            context.data.on = context.data.on || {};
            if (!Object.isExtensible(context.data.on)) {
                context.data.on = { ...context.data.on }
            }

            if (mode) context.data.props.mode = mode;

            context.data.on.beforeEnter = el => {
                el.style.transformOrigin = context.props.origin;
                el.style.webkitTransformOrigin = context.props.origin
            };

            return h('transition', context.data, context.children)
        }
    }
}
export function createJavaScriptTransition (name, functions, css = true, mode = 'in-out') {
    return {
        name,

        functional: true,

        props: {
            css: {
                type: Boolean,
                default: css
            },
            mode: {
                type: String,
                default: mode
            }
        },

        render (h, context) {
            const data = {
                props: {
                    ...context.props,
                    name
                },
                on: functions
            };

            return h('transition', data, context.children)
        }
    }
}

export function addOnceEventListener (el, event, cb) {
    let once = () => {
        cb();
        el.removeEventListener(event, once, false)
    };

    el.addEventListener(event, once, false)
}

export function getZIndex (el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0;
    let zi = document.defaultView.getComputedStyle(el).getPropertyValue('z-index');
    if (isNaN(zi)) return getZIndex(el.parentNode);

    return zi
}
export function createRange (length) {
    return [...Array.from({ length }, (v, k) => k)]
}

export function filterObjectOnKeys (obj, keys) {
    const filtered = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (typeof obj[key] !== 'undefined') {
            filtered[key] = obj[key]
        }
    }

    return filtered
}