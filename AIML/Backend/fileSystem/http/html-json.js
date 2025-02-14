const http = require('http');
const fs = require('fs/promises');
// const users=[{
//     id:1,
//     name:'Ayush',
//     email: 'akash@example.com',
// },{
//     id:2,
//     name:'suresh',
//     email: 'suresh@example.com',
// },{
//     id:3,
//     name:'Rahul', 
//     email: 'akash@example.com',
// }]
// create server
const server= http.createServer(async(req,res)=>{
    // res.statusCode= 200;
    // res.setHeader('content-Type','text/plain');
    res.writeHead(200,{'content-Type':'application/json'});
    const jdata = await fs.readFile("./aa.json","utf8");
    const users =  JSON.parse(jdata)
    // const data = users.map((user)=>{
    //     return user.name;
    // });
    let data =""
    users.forEach((user) =>{
        data +=user.name;
    });
    res.end(JSON.stringify(users));
});
port = 3001
server.listen(3001,()=>{
    console.log(`Server is running on ${port}`);
});
