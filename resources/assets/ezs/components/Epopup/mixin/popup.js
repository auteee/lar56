//节点本身和父级节点
import extend from "../../../util/extend";

export default {
    // data: () => ({
    //
    // }),
    props:{

    },
    methods:{
        parsePosition (pos) {
            let parts = pos.split(' ');
            return {vertical: parts[0], horizontal: parts[1]}
        },
        getOverlapMode (anchor, target, median) {
            if ([anchor, target].indexOf(median) >= 0) return 'auto';
            if (anchor === target) return 'inclusive';
            return 'exclusive'
        },
        getPositions (anchor, target) {

            const a = extend({}, anchor), t = extend({}, target);  //对传进的参数重新格式化

            const positions = {
                x: ['left', 'right'].filter(p => p !== t.horizontal),
                y: ['top', 'bottom'].filter(p => p !== t.vertical)
            };

            const overlap = {
                x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
                y: this.getOverlapMode(a.vertical, t.vertical, 'center')
            };

            positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
            positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

            if (overlap.y !== 'auto') {
                a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
                if (overlap.y === 'inclusive') {
                    t.vertical = t.vertical
                }
            }

            if (overlap.x !== 'auto') {
                a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
                if (overlap.y === 'inclusive') {
                    t.horizontal = t.horizontal
                }
            }

            return {
                positions: positions,
                anchorPos: a
            }
        },
        getAnchorPosition (el, offset) {
            //console.info(el);
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
        },
        getTargetPosition (el) {
            return {
                top: 0,
                center: el.offsetHeight / 2,
                bottom: el.offsetHeight,
                left: 0,
                middle: el.offsetWidth / 2,
                right: el.offsetWidth
            }
        },
        //设置目标显示位置
        setPosition ({el, anchorEl, anchorOrigin, selfOrigin, maxHeight, offset}) {
            let anchor,target;
            el.style.maxHeight = maxHeight || 'inherit';

            anchor = this.getAnchorPosition(anchorEl, offset);
            //console.info(anchor);
            this.sneakPeek(el,()=>{

                target = this.getTargetPosition (el);

                if(this.fullWidth){
                    el.style.width=anchor.width+'px';
                }
                if(this.absoluted){
                    el.style.top = anchor.top + 'px';
                    el.style.left = anchor.left + 'px';
                }else{
                    let targetPosition = {
                        top: anchor[anchorOrigin.vertical] - target[selfOrigin.vertical],
                        left: anchor[anchorOrigin.horizontal] - target[selfOrigin.horizontal]
                    };
                    targetPosition = this.applyAutoPositionIfNeeded(anchor, target, selfOrigin, anchorOrigin, targetPosition);
                    el.style.top = Math.max(0, targetPosition.top) + 'px';
                    el.style.left = Math.max(0, targetPosition.left) + 'px';
                }
            });
        },
        applyAutoPositionIfNeeded (anchor, target, selfOrigin, anchorOrigin, targetPosition) {
            const {positions, anchorPos} = this.getPositions(anchorOrigin, selfOrigin);

            if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
                let newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
                if (newTop + target.bottom <= window.innerHeight) {
                    targetPosition.top = newTop
                }
                else {
                    newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
                    if (newTop + target.bottom <= window.innerHeight) {
                        targetPosition.top = newTop
                    }
                }
            }
            if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
                let newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
                if (newLeft + target.right <= window.innerWidth) {
                    targetPosition.left = newLeft
                }
                else {
                    newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
                    if (newLeft + target.right <= window.innerWidth) {
                        targetPosition.left = newLeft
                    }
                }
            }
            return targetPosition
        },
        //获取目标信息 top,let,width...
        sneakPeek (el,cb) {
            //var els=el;
            requestAnimationFrame(() => {
                //let el=els;
                //console.info(el);
                if (!el || el.style.display !== 'none') return cb();

                el.style.display = 'inline-block';
                cb();
                el.style.display = 'none'
            })
        },
    }
}