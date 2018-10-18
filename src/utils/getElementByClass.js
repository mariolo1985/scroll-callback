module.exports = function getElementByClass(className) {
    var el = document.querySelectorAll('.' + className);
    return el;
}
