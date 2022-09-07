
/*1 */

console.log ('HELLO WORLD');


/* 2 */

const http =  require ('http') ;
const server = http.createServer((req,res)=> {
    res.write('Hello Node!!!!');
    res.end();
});
server.listen (3000);

/* 3 */

const fs = require ('fs');
fs.readFile ('./hello.txt', 'utf-8' , (err, data) => {
    console.log(data)
});

/* 4 */
var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});
console.log(password);



