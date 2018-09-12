# scroll-callback

A work-in-progress vanilla JS module. 

This module will trigger a callback as your window is scrolling.

Built by: [Mario Lo](https://github.com/mariolo1985)

## Install

```
yarn add scroll-callback
```

## Example

```javascript
import scrollCallback from 'scroll-callback';

(() => {
    scrollCallback(scrollAction, 2000);
})();

function scrollAction() {
    console.log('scrolled');
}
```

This will add a scroll event listener to your **window** object

## Parameters

| Parameter Name   | Type   | Required   | Default Value   | Description   |
| --- | --- | --- | --- | --- |
| callback | function | true | null | function to be called when window is scrolling |
| waitDuration | number | false | 50 | Wait duration in between callback |
| elementId | string | false | null | including an elementId will return the element's position in the callback |

**callback**

`type: function`

This function will be called as the window is scrolling.

**waitDuration**

`type: number`

This is a wait time in milli-seconds. This sets the wait time in a setTimeout call to delay the scroll listener.

**elementId**

`type: string`

This is an element id in the DOM. If supplied, the element position will be returned to the callback. This calls `getBoundingClientRect()` on the element.


### Future Features

WIP

### Feature Request

Please message hello@websitesbymario.com for feature requests.

### Bug Report

Please message hello@websitesbymario.com to report bugs.
