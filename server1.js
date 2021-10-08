console.log('server is running again');

/*
First we need to create our server and tell it to start listening on a certain port.
ToDo:
1) Create a variable called http to start the server
    a)This will include the http libaray inside of our code into the http variable

2)Create a variable that tells our code what port we're going to be listening to for our server.

3)Then we will create our server

4)Setup our server so it will listen on the port that we want it to
*/
const http = require('http');


const port = 3000;

//Everytime someone will request a page to our server it is going to call this function
const server = http.createServer((req, res)=>{
    //this is the place where the magic happens
    //from the event object we can get data from the request
    req.on('data', function (data) {
        console.log(data.toString());
    })
    

    //This is where we can detect the path called on our endpoint.

    console.log(`request for ${req.url}`);
    console.log(req.method);
    if(req.url==='/v1/add/user' && req.method === 'PUT'){
        res.statusCode =200;
        res.setHeader('Content-Type','text/plain');
        res.end('Adding a new User');


    }else if(req.url==='/v1/list/user' && req.method ==='GET'){
        res.statusCode =200;
        res.setHeader('Content-Type','text/plain');
        res.end('List of all user');
    }
    
    else if (req.url === '/v1/product' && req.method === 'POST'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('Hello Product');

    }else{
        res.statusCode =501;
        res.setHeader('Content-Type','text/plain');
        res.end('Not supported');
    }
/*
    res.statusCode = 200;

    //what type of data we are heading back
    res.setHeader('Content-Type','text/plain');

    //sending data back to client closing connection
    res.end('Hello API World');
    */

});

//event listener for event connection
server.on('connection',(data)=>{
console.log(data);
});

server.listen(port,()=>{
    console.log("web server");
})