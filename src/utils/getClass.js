module.exports = function getClass(className) {
    var el = document.querySelectorAll('.' + className);
    return el;
}
