module.exports = function callbackAtElements(callback, waitDuration, elementClass) {
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
        elementStore.forEach(function (el, index) {
            if (el.getBoundingClientRect().top <= 0) {
                elementStore.splice(index, 1);
                callback(el);
            }
        });

        if (elementStore.length <= 0) {
            window.removeEventListener('scroll', mkAddCallbackAtElementsListener);
        }
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
    var elementStore = [];
    if (elements.length > 0) {
        elements.forEach(function (el) {
            elementStore.push(el);
        });
        window.addEventListener('scroll', mkAddCallbackAtElementsListener);
    }
}
