//This section list the required libraries
var express = require("express");
//Create an instance of express server
var app = express();

app.get("/",function(request,respond){
	respond.send('<h1>This is my web app210</h1>');
});
app.get("/something",function(request,respond){
	respond.send('<h1>This is something</h1>');
});
app.get("/ronnie",function(request,respond){
	respond.send('<h1>What can I do for you</h1>');
});
//Start the express server to listen to a port in the server
var listener = app.listen(
    process.env.PORT,
    process.env.IP,
    function(){
	console.log("server has started");
	console.log('Listening on port ' + listener.address().port);
});
