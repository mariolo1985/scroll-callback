module.exports = function scrollCallbackWithElement(callback, waitDuration, elementId) {
    var scrollCallbackWithElementTimeout;
    function mkAddScrollCallbackWithElementListener() {
        var el = document.getElementById(elementId);

        if (!scrollCallbackWithElementTimeout) {
            scrollCallbackWithElementTimeout = setTimeout(function () {
                scrollCallbackWithElementTimeout = null;
                if (el !== null) {
                    callback(el);
                    return;
                }

                callback();
            }, waitDuration === undefined || waitDuration === null ? 50 : waitDuration)
        }
    }

    // callback check
    if (callback === undefined) {
        return;
    }

    // element id checks
    if (elementId !== undefined && typeof elementId !== 'string') {
        console.log('Something went wrong:');
        console.log('[elementId] needs to be a string');
        return;
    }

    // passed checks
    window.addEventListener('scroll', mkAddScrollCallbackWithElementListener);
}
