// touch.js

function createTouchEvent (type){
    return new window.TouchEvent(type, {
        bubbles: true,
        cancelable: true
    })
};

function dispatchTouchEvent(eventTarget, event){
    if(typeof eventTarget == 'string'){
        eventTarget = document.querySelector(eventTarget)
    }
    eventTarget.dispatchEvent(event)
    return eventTarget
};