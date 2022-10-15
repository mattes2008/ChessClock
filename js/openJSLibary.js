function createElement (type, dest, id) {

    type = String(type)
    id = String(id)
    let newObject = document.createElement(type)
    newObject.id = id

    if (newObject.id==="undefined") {
        newObject.removeAttribute("id")
    }

    dest.appendChild(newObject)
    return newObject


}




function removeElement (element) {

    element.remove ()

}




function hideElement (element) {

    element.setAttribute("style", "display: none; visibility: hidden;")

}




function showElement (element) {

    element.setAttribute("style", "")

}




function copyElement (element, dest) {

    let clone = element.cloneNode(true)
    dest.appendChild(clone)

}




function localStorageSave (key, value) {

    localStorage.setItem(key, JSON.stringify(value))

}




function localStorageLoad (key) {

    return JSON.parse(localStorage.getItem(key))

}




function mathPrim (value) {

    if (value===1) {
        return false
    } else if (value===2) {
        return true
    } else if (value===0) {
        return false
    } else if (value<0) {
        console.error("Error: value have to be an integer in the positive sector")
    } else if (!Number.isInteger(value)) {
        console.error("Error: value have to be an integer in the positive sector")
    } else {

        for (let i=2; i<(value/2)+1; i++) {

            if (Number.isInteger(value/i)) {
                return false
            } else if (i>value/2) {
                return true
            }

        }

    }

}




function repeat (type, func, value) {

    if (type==="times") {

        for (let i=0; i<value; i++) {

            func ()

        }

    } else if (type==="seconds") {

        let timer = setInterval(function () {func ()}, value*1000)

    }

}
