console.log('server is running again');

/*
Creating a server with a array database
*/
const http = require('http');


const port = 3000;

let userDB = []; //this will be our data storage.



const server = http.createServer((req, res)=>{
  //we need 2 api end points
  //add user
  //get list of all users
 
  if((req.url === '/v1/add/user') &&(req.method ==='PUT')){
    //we will add a user

    //conversion from body to user data
    let bodyData = null; //String of data
    let userData = null; //will be our JSON

    //fetch the data from the request
    req.on('data',function(data){

        bodyData = data.toString(); //The data we sent from our application (postman) to our API
        userData = JSON.parse(bodyData);  // This line parses our data into a json object
        console.table(userData); //debug terminal 

        // create the user object to push into our database object
        const userObject ={
            _id:Math.random(),
            user:userData.user
        }
        userDB.push(userObject);
        res.statusCode = 200;
        res.end('OK');
    });




  }else if((req.url === '/v1/get/user') && (req.method === 'GET')){
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    console.log(userDB);
    res.end(JSON.stringify(userDB));
  }
  else{
    res.statusCode = 500;
    res.end('not supported');
  }


    });
    


//event listener for event connection
server.on('connection',(data)=>{
console.log(data);
});

server.listen(port,()=>{
    console.log("web server");
})