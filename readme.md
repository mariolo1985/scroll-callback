# scroll-callback

A work-in-progress vanilla JS module. 

This module will trigger a callback as your window is scrolling.

Built by: [Mario Lo](https://github.com/mariolo1985)

## Install

```
yarn add scroll-callback
```

## Example

```
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

| Name   | Type   | Required   | Default Value   | Description   |
| --- | --- | --- | --- | --- |
| callback | function | true | null | function to be called when window is scrolling |
| waitDuration | number | false | 50 | Wait duration in between callback |

### Future Features

* Return an element position in callback

### Feature Request
