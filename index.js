module.exports = function scrollCallback(callback, waitDuration) {
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

    // passed checks
    window.addEventListener('scroll', addScrollEventListener);
}
