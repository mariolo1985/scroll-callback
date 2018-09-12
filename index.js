module.exports = function (elementId, callback, waitDuration) {
    var scrollTimeout;
    function addScrollEventListener() {
        var wait = waitDuration === undefined ? 50 : waitDuration;
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function () {
                scrollTimeout = null;
                callback();
            }, wait)
        }
    }
    // hard check
    if (elementId === null || typeof elementId !== 'string') {
        console.log('Something went wrong! Please passing in an element id as a string.');
        return;
    }

    // element check
    var element = document.getElementById(elementId);
    if (element === null) {
        console.log('Something went wrong! We cannot find the element id in the DOM.');
        return;
    }

    // passed checks
    window.addEventListener('scroll', addScrollEventListener);
}
