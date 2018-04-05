import { consoleError } from '../../../util/console'
import * as easingPatterns from '../../../util/easing-patterns'

const defaults = {
  duration: 500,
  offset: 0,
  easing: 'easeInOutCubic'
};

export default function eGoTo(to,f='e-main',options){
    //if(!timeoutRef) return;
    let toEl=0;       //目标位置
    if(to && typeof to === 'string'){
        if(!document.getElementById(to))
            return;
        toEl=document.getElementById(to).offsetTop;
    }

    let el=document.getElementById(f) || document.body;
    let start = el.scrollTop; // 当前滚动距离
    let distance=el.scrollHeight-el.clientHeight;
    let end= Math.min(toEl,distance);

    let flagDistance=end - start;
    let startTime = performance.now(); // 当前时间
    const settings = Object.assign({}, defaults, options);
    const easingFunction = typeof settings.easing === 'function' ? settings.easing : easingPatterns[settings.easing];
    if (!easingFunction) return consoleError(`Easing function '${settings.easing}' not found.`);


    function scroll (now) {
        let timer = Math.min(1, ((now - startTime) / settings.duration));
        el.scrollTop = start + flagDistance * easingFunction(timer);
        if (el.scrollTop === end ) return;
        window.requestAnimationFrame(scroll)
    }

    window.requestAnimationFrame(scroll);

}
