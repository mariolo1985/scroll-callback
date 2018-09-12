module.exports = function scrollCallback(callback, waitDuration, elementId) {
    var scrollTimeout;
    function addScrollEventListener() {
        var element = document.getElementById(elementId);
        var wait = waitDuration === undefined ? 50 : waitDuration;
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function () {
                scrollTimeout = null;
                if (element !== null) {
                    callback(element.getBoundingClientRect());
                    return;
                }

                callback();
            }, wait)
        }
    }

    // callback check
    if (callback === undefined){
        return;
    }

    // element id checks
    if (elementId !== undefined && typeof elementId !== 'string') {
        console.log('Something went wrong:');
        console.log('[elementId] needs to be a string');
        return;
    }

    // passed checks
    window.addEventListener('scroll', addScrollEventListener);
}
