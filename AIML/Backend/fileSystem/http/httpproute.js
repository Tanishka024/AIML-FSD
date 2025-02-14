const http = require('http');
const fs = require('fs/promises');

const server= http.createServer(async(req,res)=>{
    res.setHeader('content-Type','text/html');
    if(req.method == 'GET' && req.url =='/') {
        const a = await fspromises.readFile("aa.json");
        res.end(a)
    }
    else if(req.url == '/error'){
        const a = await fspromises.readFile("./home.html");
        res.end(a)
    }
    else{
        const a = await fspromises.readFile("./error.html");
        res.end(a)
    }
    // res.end(JSON.stringify(users));
});
port = 3001
server.listen(3001,()=>{
    console.log(`Server is running on ${port}`);
});
