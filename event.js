// EventEmitter 类

/**
 let EventEmitter  = require('events').EventEmitter
 let event = new EventEmitter()
 event.on('some_event', () => {
    console.log('some_event事件触发')
})
 setTimeout(() => {
    event.emit('some_event')
}, 1000)
 */
let events = require('events')
let emitter = new events.EventEmitter()
emitter.on('someEvent', (arg1, arg2) => {
    console.log('listener1', arg1, arg2)
})

emitter.on('someEvent', (arg1, arg2) => {
    console.log('listener2', arg1, arg2)
})

emitter.emit('someEvent', 'arg1参数', 'arg2参数')