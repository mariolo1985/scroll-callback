# scroll-callback

This module will trigger a callback as your window is scrolling and return an element position.

A work-in-progress JS module.

Built by: [Mario Lo](https://github.com/mariolo1985)

## Install

```
yarn add scroll-callback
```

## Example

```javascript
import { scrollCallback, scrollCallbackWithElement, callbackAtElement } from 'scroll-callback';

(() => {
    scrollCallback(scrollAction, 1000);
    scrollCallbackWithElement(scrollAction, 1000, 'profile-container');
    callbackAtElement(scrollAction, 1500, 'profile-container');
})();

```

This will add a scroll event listener to your **window** object

## Functions

**scrollCallback**

`This will trigger the callback while the page is scrolling.`

**scrollCallbackWithElement**

`This will trigger the callback and return an element position object while the page is scrolling.`

**callbackAtElement**

`This will trigger the callback at the element. The callback will only be triggered once.` 

> Returns the element in callback

## Parameters
```javascript
scrollCallback(callback, waitDuration);
scrollCallbackWithElement(callback, waitDuration, elementId);
callbackAtElement(callback, waitDuration, elementId);
```

| Parameter Name   | Type   | Required   | Default Value   | Description   |
| --- | --- | --- | --- | --- |
| callback | function | true | null | A function to be called on scroll |
| waitDuration | number | false | 50 | Wait duration in between callback |
| elementId | string | false | null | The id of the element we want the position of |

**callback**

`type: function`

This function will be called as the window is scrolling.

**waitDuration**

`type: number`

This is a wait time in milli-seconds. This sets the wait time in a setTimeout call to delay the scroll listener.

**elementId**

`type: string`

This is an element id in the DOM. If supplied, the element position will be returned to the callback. This calls `getBoundingClientRect()` on the element.


## Future Features

- [x] ~~Return an element position in callback~~ **implemented in version 0.0.37**
- [ ] Remove scroll event listener **Currently only implemented in `callbackAtElement`**

## Feature Request

Please message hello@websitesbymario.com for feature requests.

## Bug Report

Please message hello@websitesbymario.com to report bugs.
