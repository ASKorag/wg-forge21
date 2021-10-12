"use strict";
const mainDiv = document.querySelector('#div');
function iterBfsTraverse(tree) {
    const res = [];
    const queue = [tree];
    let index = 0;
    while (index < queue.length) {
        const elem = queue[index];
        res.push(elem);
        index++;
        let newElem = elem.firstElementChild;
        while (newElem) {
            queue.push(newElem);
            newElem = newElem.nextElementSibling;
        }
    }
    return res;
}
console.log('Iterative BFS Traverse =>', iterBfsTraverse(mainDiv));
