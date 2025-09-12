import {createServer} from 'http';  

const users=[
    {id:1, name:'Umair'},
    {id:2, name:'Ali'},
    {id:3, name:'Ahmed'},
];

const server=createServer((req, res)=>{
    if(req.url==='/api/users'){
        res.writeHead(200, {'Content-Type':'application/json'});    
        res.end(JSON.stringify(users));
    }
    else if(req.url.match(/\/api\/users\/([0-9]+)/)){
        const id=req.url.split('/')[3];
        const user=users.find(u=>u.id===parseInt(id));
        if(user){
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(user));
        } else{
            res.writeHead(404, {'Content-Type':'application/json'});    
            res.end(JSON.stringify({message:'User not found'}));
        }
    }
    else{
        res.writeHead(404, {'Content-Type':'application/json'});    
        res.end(JSON.stringify({message:'Route not found'}));
    }
});

const PORT=5000 || process.env.PORT;
server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));