# scroll-callback

This module will add a scroll event listener to the **window** object to trigger a callback.

A work-in-progress JS module.

Built by: [Mario Lo](https://github.com/mariolo1985)

## Install

```
yarn add scroll-callback
```

## Example

```javascript
import { 
    scrollCallback, 
    scrollCallbackWithElement, 
    callbackAtElement, 
    callbackAtElementSurface 
} from 'scroll-callback';

(() => {
    scrollCallback(scrollAction, 1000);
    scrollCallbackWithElement(scrollAction, 1000, 'profile-container');
    callbackAtElement(scrollAction, 1500, 'profile-container');
    callbackAtElementSurface(scrollAction, 1500, 'profile-container');
})();

```

## Functions

**scrollCallback**

- Triggers a callback as the page is scrolling
- Does not remove the scroll event listener

**scrollCallbackWithElement**

- Triggers the callback as the page is scrolling and returns the element in the callback
- Does not remove the scroll event listener

> Returns the element in callback

**callbackAtElement**

- Triggers the callback when the top of the element reaches the top of the page
- Does remove the scroll event listener

> Returns the element in callback

**callbackAtElementSurface**

- Triggers the callback when the top of the element surfaces at the bottom page. 
- Does remove the scroll event listener

> Returns the element in callback

**getElementByClass**

- Gets a node list of elements via class name
- calls `querySelectorAll()`

> Returns a static nodeList


## Parameters
```javascript
scrollCallback(callback, waitDuration);
scrollCallbackWithElement(callback, waitDuration, elementId);
callbackAtElement(callback, waitDuration, elementId);
callbackAtElementSurface(callback, waitDuration, elementId);
getElementByClass(className);
```

| Parameter Name   | Type   | Required   | Default Value   | Description   |
| --- | --- | --- | --- | --- |
| callback | function | true | null | A function to be called on scroll |
| waitDuration | number | false | 50 | Wait duration in between callback |
| elementId | string | false | null | The id of the element we want the position of |
| className | string | false | true | Class name of elements we want |

**callback**

`type: function`

This function will be called as the window is scrolling.

**waitDuration**

`type: number`

This is a wait time in milli-seconds. This sets the wait time in a setTimeout call to delay the scroll listener.

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
