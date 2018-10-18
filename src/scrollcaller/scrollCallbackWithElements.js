module.exports = function scrollCallbackWithElements(callback, waitDuration, elementClass) {
    var callbackAtElementTimeout;
    function mkAddCallbackAtElementsListener() {
        if (!callbackAtElementTimeout) {
            callbackAtElementTimeout = setTimeout(function () {
                callbackAtElementTimeout = null;
                scrolled();
            }, waitDuration === undefined || waitDuration === null ? 50 : waitDuration)
        }
    }

    function scrolled() {
        callback(elements);
    }

    // callback check
    if (callback === undefined) {
        return;
    }

    // element id checks
    if (elementClass !== undefined && typeof elementClass !== 'string') {
        console.log('Something went wrong:');
        console.log('[elementClass] needs to be a string');
        return;
    }

    // passed checks
    var elements = document.querySelectorAll('.' + elementClass);
    if (elements.length > 0) {
        window.addEventListener('scroll', mkAddCallbackAtElementsListener);
    }
}
