# scroll-callback

A scroll event module

## Install

```
yarn add scroll-callback
```

## Description

This module can be used to fire a callback on a page scroll. Many scenarios are handled.

You can:
- Fire a callback when an element reaches the top of the screen
- Fire a callback when an element reaches the bottom of the screen
- Fire a callback and return the element everytime the page scrolls
- Fire a callback when multiple elements reaches the top of the screen
- ...more!

This is element focused and can be used in many ways.

A work-in-progress JS module.

Built by: [Mario Lo](https://github.com/mariolo1985)


## Example

```javascript
import { 
    scrollCallback, 
    scrollCallbackWithElement, 
    scrollCallbackWithElements,
    callbackAtElement, 
    callbackAtElements,
    callbackAtElementSurface 
} from 'scroll-callback';

(() => {
    scrollCallback(scrollAction, 1000);
    scrollCallbackWithElement(scrollAction, 1000, 'profile-container');
    scrollCallbackWithElements(scrollAction, 1500, 'menu-item');
    callbackAtElement(scrollAction, 1500, 'profile-container');
    callbackAtElements(scrollAction, 1500, 'menu-item');
    callbackAtElementSurface(scrollAction, 1500, 'profile-container');
})();

```

## Functions

### scrollCallback

Fires a callback as the page is scrolling. Does not remove the scroll event listener.

### scrollCallbackWithElement

Fires the callback as the page is scrolling and returns the element in the callback. Does not remove the scroll event listener.

> Returns the element in callback

### scrollCallbackWithElements

Handles multiple elements by passing in a class. Fires the callback as the page is scrolling and returns the nodelist in the callback. Does not remove the scroll event listener

> Returns a static nodelist in callback

### callbackAtElement

Fires the callback when the element reaches the top of the page. Does remove the scroll event listener

> Returns the element in callback

### callbackAtElements

Handles multiple elements by passing in a class. Fires the callback when the top of an element reaches the top of the page. Does remove the scroll event listener when all elements have been "called back"

> Returns the nodelists in callback

### callbackAtElementSurface

Fires the callback when the top of the element reaches the bottom of the page. Does remove the scroll event listener

> Returns the element in callback

### getElementByClass

Gets a node list of elements via class name. Calls `querySelectorAll()`

> Returns a static nodeList


## Parameters
```javascript
scrollCallback(callback, waitDuration);
scrollCallbackWithElement(callback, waitDuration, elementId);
scrollCallbackWithElements(callback, waitDuration, elementClass);
callbackAtElement(callback, waitDuration, elementId);
callbackAtElements(callback, waitDuration, elementClass);
callbackAtElementSurface(callback, waitDuration, elementId);
getElementByClass(className);
```

| Parameter Name   | Type   | Required   | Default Value   | Description   |
| --- | --- | --- | --- | --- |
| callback | function | true | null | A function to be called on scroll |
| waitDuration | number or null for default | false | 50 | Wait duration in between callback |
| elementId | string | false | null | The id of the element we want the position of |
| elementClass | string | false | true | The id of the element we want the position of |
| className | string | false | true | Class name of elements we want |

**callback**

`type: function`

This function will be called as the window is scrolling.

**waitDuration**

`type: number`

This is a wait time in milli-seconds. This is provided to give you custom timing to fire your callback.

**elementId**

`type: string`

An element ID in the DOM. If supplied, the element be returned to the callback.

**className**

`type: string`

This should be the class name of the elements we want.

## Contributing

Please open a new issue and mention me to get the ball rolling. Thanks!

## Future Features

- Ability to handle multiple elements

## Feature Request

Please message hello@websitesbymario.com for feature requests.

## Bug Report

Please message hello@websitesbymario.com to report bugs.
