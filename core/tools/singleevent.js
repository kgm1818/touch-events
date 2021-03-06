
const weakMapBinder = require('./weakmap.js')
const delegateProxyCreator = require('./proxy.js')

class SingleEvent {
    constructor(options){
        this.eventHandler = new Map()
    }

    bind(bindTarget, callback, delegateTarget){
        let eventHandlers = this.options.eventHandlers(callback);
        Object.keys(eventHandlers).map(item => { // touchstart
            eventHandlers[item] = delegateProxyCreator(bindTarget, delegateTarget, eventHandlers[item])
            weakMapBinder(bindTarget, eventHandlers[item], item)
        })
        this.eventHandlers.set(callback, this.eventHandlers)
    }

    remove(bindTarget, callback){
        Object.entries(this.eventHandler.get(callback)).map(eventItem => {
            bindTarget.removeEventListener(eventItem[0], eventItem[1])
        })
        return bindTarget;
    }
}

module.exports = SingleEvent;