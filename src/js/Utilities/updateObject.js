export const updateObject = (oldObject, newObj) => {
    for (const key in newObj) {
        if (Object.hasOwnProperty.call(newObj, key)) {
            oldObject[key] = newObj[key];
        }
    }
}