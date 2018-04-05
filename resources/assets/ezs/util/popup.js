
import extend from "./extend";


export function getOverlapMode (anchor, target, median) {
    if ([anchor, target].indexOf(median) >= 0) return 'auto';
    if (anchor === target) return 'inclusive';
    return 'exclusive'
}
export function getPositions (anchor, target) {

    const a = extend({}, anchor), t = extend({}, target);  //对传进的参数重新格式化

    const positions = {
        x: ['left', 'right'].filter(p => p !== t[1]),
        y: ['top', 'bottom'].filter(p => p !== t[0])
    };

    const overlap = {
        x: getOverlapMode(a[1], t[1], 'middle'),
        y: getOverlapMode(a[0], t[0], 'center')
    };

    positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
    positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

    if (overlap.y !== 'auto') {
        a[0] = a[0] === 'top' ? 'bottom' : 'top';
        if (overlap.y === 'inclusive') {
            t[0] = t[0]
        }
    }

    if (overlap.x !== 'auto') {
        a[1] = a[1] === 'left' ? 'right' : 'left';
        if (overlap.y === 'inclusive') {
            t[1] = t[1]
        }
    }
    return {
        positions: positions,
        anchorPos: a
    }
}
export function applyAutoPositionIfNeeded (anchor, target, selfOrigin, anchorOrigin, targetPosition) {
    const {positions, anchorPos} = getPositions(anchorOrigin, selfOrigin);

    if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
        let newTop = anchor[anchorPos[0]] - target[positions.y[0]];
        if (newTop + target.bottom <= window.innerHeight) {
            targetPosition.top = newTop
        }
        else {
            newTop = anchor[anchorPos[0]] - target[positions.y[1]];
            if (newTop + target.bottom <= window.innerHeight) {
                targetPosition.top = newTop
            }
        }
    }
    if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
        let newLeft = anchor[anchorPos[1]] - target[positions.x[0]];
        if (newLeft + target.right <= window.innerWidth) {
            targetPosition.left = newLeft
        }
        else {
            newLeft = anchor[anchorPos[1]] - target[positions.x[1]];
            if (newLeft + target.right <= window.innerWidth) {
                targetPosition.left = newLeft
            }
        }
    }
    return targetPosition
}
//获取位置信息
export function getAnchorPosition (el, offset) {
    let {top, left, right, bottom} = el.getBoundingClientRect(),
        a = { top, left, width: el.offsetWidth, height: el.offsetHeight };

    if (offset) {
        a.top -= offset[1];
        a.left -= offset[0];
        if (bottom) {
            bottom += offset[1]
        }
        if (right) {
            right += offset[0]
        }
        a.width += offset[0];
        a.height += offset[1]
    }
    a.right = right || a.left + a.width;
    a.bottom = bottom || a.top + a.height;
    a.middle = a.left + ((a.right - a.left) / 2);
    a.center = a.top + ((a.bottom - a.top) / 2);

    return a
}
//获取目标自身信息 有transtion 时　全为0
export function getTargetPosition (el) {
    return {
        top: 0,
        center: el.offsetHeight / 2,
        bottom: el.offsetHeight,
        left: 0,
        middle: el.offsetWidth / 2,
        right: el.offsetWidth
    }
}
//获取　el的大小位置，如果没有这一步，el 所有属性为0
export function sneakPeek(el,cb){
    requestAnimationFrame(() => {
        let el=el;
        //console.info(el);
        if (!el || el.style.display !== 'none') return cb();

        el.style.display = 'inline-block';
        cb();
        el.style.display = 'none'
    });
}
//设置位置
export function setPosition ({el, anchorEl, anchorOrigin, selfOrigin, maxHeight, offset}) {
    let anchor,target;
    el.style.maxHeight = maxHeight || 'inherit';

    anchor = getAnchorPosition(anchorEl, offset);

    sneakPeek(el,()=>{
        //console.info('ddd');
        target = getTargetPosition (el);

        let targetPosition = {
            top: anchor[anchorOrigin[0]] - target[selfOrigin[0]],
            left: anchor[anchorOrigin[1]] - target[selfOrigin[1]]
        };

        targetPosition = applyAutoPositionIfNeeded(anchor, target, selfOrigin, anchorOrigin, targetPosition);

        el.style.top = Math.max(0, targetPosition.top) + 'px';
        el.style.left = Math.max(0, targetPosition.left) + 'px'
    });
}

//验证信息
export function positionValidator (pos) {
    if (!Array.isArray(pos) && pos.length !== 2) {
        return false
    }
    if (!['top', 'center', 'bottom'].includes(pos[0])) {
        console.error('Anchor/Self position must start with one of top/center/bottom');
        return false
    }
    if (!['left', 'middle', 'right'].includes(pos[1])) {
        console.error('Anchor/Self position must end with one of left/middle/right');
        return false
    }
    return true
}

export function offsetValidator (val) {
    if (!val) { return true }
    if (val.length !== 2) { return false }
    return typeof val[0] === 'number' && typeof val[1] === 'number';
}