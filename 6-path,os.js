const path = require('path')

console. log(path.sep)

const filePath = path.join('/content/','subfolder', 'test.txt')
console. log(filePath)

const base = path.basename(filePath)
console. log(base)

const absolute = path.resolve(_dirname,'content','subfolder','test.txt');
console. log(absolute);


//built in module os so no need of./
const os = require('os');

//info abt cuur user
const user= os.userInfo()
console.log(user);
console.log(`the system uptime is ${os.uptime()} sec`);