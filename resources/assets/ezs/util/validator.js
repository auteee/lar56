

//验证信息 位置　
export function positionValidator (pos) {
    let parts = pos.split(' ');
    if (parts.length !== 2) {
        return false
    }
    if (!['top', 'center', 'bottom'].includes(parts[0])) {
        console.error('Anchor/Self position must start with one of top/center/bottom');
        return false
    }
    if (!['left', 'middle', 'right'].includes(parts[1])) {
        console.error('Anchor/Self position must end with one of left/middle/right');
        return false
    }
    return true
}

export function offsetValidator (val) {
    if (!val) { return true }
    if (val.length !== 2) { return false }
    if (typeof val[0] !== 'number' || typeof val[1] !== 'number') {
        return false
    }
    return true
}