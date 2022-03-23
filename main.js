// ——————————阻塞代码，按顺序执行——————————
// var fs = require('fs')
// var data = fs.readFileSync('input.txt')
// console.log(data.toString())
// console.log('程序执行结束')
// ——————————非阻塞代码（异步）——————————
// var fs = require('fs')
// fs.readFile('input.txt', function(err, data) {
//   if (err) return console.error(err)
//   console.log(data.toString())
// })
// console.log('程序执行结束')

// ——————————事件循环——————————
// 引入events模块
var events = require('events');
// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功')
      // 触发data_received事件
    eventEmitter.emit('data_received')
  }
  // 绑定connection事件处理程序
eventEmitter.on('connection', connectHandler)
  // 使用匿名函数绑定data_received事件
eventEmitter.on('data_received', function() {
    console.log('数据接收成功')
  })
  // 触发connection事件
eventEmitter.emit('connection')
var EventEmitter = require('events')

// --------------------------------------------------
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");

var fs = require('fs')
var readerStream = fs.createReadStream('input.txt')
var writerStream = fs.createWriteStream('output.txt')
readerStream.pipe(writerStream)