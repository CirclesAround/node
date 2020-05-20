/**
 回调函数
 let fs = require('fs')
 1、阻塞(按顺序执行)
 let data = fs.readFileSync('input.txt')
 console.log(data.toString())
 console.log('程序执行结束')
 2、非阻塞(不需要按顺序)
 fs.readFile('input.txt', (err, data) => {
    if (err) return console.log('err')
    console.log(data.toString())
 })
 console.log('执行完毕')
 */

/**
 // 事件循环
 // 引入events模块
 let events = require('events')

 // 创建eventEmitter对象
 let eventEmitter = new events.EventEmitter()

 // 创建事件处理程序
 let connectHandler = function connected () {
    console.log('连接成功')

    // 触发 data_received 事件
    eventEmitter.emit('data_received')
}

 // 绑定 connection 事件处理程序
 eventEmitter.on('connection', connectHandler)

 // 使用匿名函数绑定 data_received 事件
 eventEmitter.on('data_received', () => {
    console.log('数据接收成功')
})

 // 触发 connection 事件
 eventEmitter.emit('connection')

 console.log('执行完毕')
 */

