/**
 * 
 * @param {*} array: array to loop over
 * @param {*} cb: callback for each loop
 * @param {int} dir: direction of loop, 1 for inc, -1 for decre
 * @param {*} scope 
 * @returns 
 */
export default function loop(array, cb, dir = 1, scope = undefined) {
    if (
        !Array.isArray(array) &&
        // eslint-disable-next-line no-prototype-builtins
        !NodeList.prototype.isPrototypeOf(array) &&
        // eslint-disable-next-line no-prototype-builtins
        !HTMLCollection.prototype.isPrototypeOf(array)
    )
        return;

    let i = dir == 1 ? 0 : array.length - 1,
        l = dir == 1 ? array.length : 0;

    for (i; (dir == 1 ? i < l : i > l); (dir == 1 ? i++ : i--)) {
        cb.call(scope, array[i], i);
    }
}
