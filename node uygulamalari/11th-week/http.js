// CALISIYOR VE DINLEMEYE DEVAM EDIYOR
/*

let http = require('http');

http.createServer(function (req, res){
	res.end("http ornegi");
}).listen(7088);

*/
/*

let http = require('http');

const server = http.createServer(function (req, res){
	res.end("http ornegi2");
})
let port = 7088;
server.listen(7088);

*/

// CALISIYOR VE DURUYOR


let fs = require('fs');
const error = require("console").error;
// const { error } = require("console");
// const error = console.error;
fs.readFile("deneme.yam", "utf-8", (error, data1) => {
	if (error) throw error;
	console.log(data1);
});

fs.writeFile("deneme.yam", "Sanane ne yazdigimdan", (err) => {
	if (err) throw err;
	console.log("basarili");
});
