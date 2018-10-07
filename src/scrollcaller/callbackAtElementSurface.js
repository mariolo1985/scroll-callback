module.exports = function callbackAtElementSurface(callback, waitDuration, elementId) {
    var callbackAtElementTimeout;
    function mkAddCallbackAtElementListener() {
        if (!callbackAtElementTimeout) {
            callbackAtElementTimeout = setTimeout(function () {
                callbackAtElementTimeout = null;
                scrolled();
            }, waitDuration === undefined ? 50 : waitDuration)
        }
    }

    function scrolled() {
        var el = document.getElementById(elementId);
        if (el !== null) {
            if (window.innerHeight + window.scrollY > el.getBoundingClientRect().top) {
                window.removeEventListener('scroll', mkAddCallbackAtElementListener);
                callback(el);
            }
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
    window.addEventListener('scroll', mkAddCallbackAtElementListener);
}
