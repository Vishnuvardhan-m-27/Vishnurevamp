const http = require('http');

const server = http.createServer((req, res) => {
	res.write("Welcome To Nodejs app");
	res.end();
});	

server.listen(4000, () => {
	console.log("Server running en port 4000");

});
