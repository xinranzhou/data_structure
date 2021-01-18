class LinkMap {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(val) {
        if (this.head === null) {
            this.head = {
                value: val,
                next: null,
            };
            this.length += 1;
            return;
        }
        const last = this.findLastEle(this.head);
        this.length += 1;
        last.next = {
            value: val,
            next: null,
        };
    }

    findLastEle(current) {
        if (current.next === null) {
            return current;
        }
        return this.findLastEle(current.next);
    }
}

const link = new LinkMap()
link.push(1)
link.push(2)
link.push(3)
link.push(4)
link.push(5)
link.push(6)
console.log(link)

/**
 * 龟兔赛跑
 * @param {*} linkMap 
 */
const  linkHasCricle = (linkMap) => {
    let fast = link.head;
    let slow = link.head;
    if (!fast) {
        return false
    }
    const result = checkEqul(fast.next.next, slow)
    console.log(result)
}
// 递归遍历
function  checkEqul(fast, slow) {
    if (fast.next === null) {
        return false;
    }
    if (fast.val === slow.val) {
        return true;
    }
    return checkEqul(fast.next.next, slow.next)
}

linkHasCricle(link)