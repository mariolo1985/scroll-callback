module.exports = function scrollCallback(callback, waitDuration) {
    var scrollTimeout;
    function mkAddScrollCallbackListener() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function () {
                scrollTimeout = null;
                callback();
            }, waitDuration === undefined || waitDuration === null ? 50 : waitDuration)
        }
    }

    // callback check
    if (callback === undefined) {
        return;
    }

    // passed checks
    window.addEventListener('scroll', mkAddScrollCallbackListener);
}
