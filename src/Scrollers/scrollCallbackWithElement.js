module.exports = function scrollCallbackWithElement(callback, waitDuration, elementId) {
    var scrollCallbackWithElementTimeout;
    function mkAddScrollCallbackWithElementListener() {
        var mkElement = document.getElementById(elementId);

        if (!scrollCallbackWithElementTimeout) {
            scrollCallbackWithElementTimeout = setTimeout(function () {
                scrollCallbackWithElementTimeout = null;
                if (mkElement !== null) {
                    callback(mkElement.getBoundingClientRect());
                    return;
                }

                callback();
            }, waitDuration === undefined ? 50 : waitDuration)
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
