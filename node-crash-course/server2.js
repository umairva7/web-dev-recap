import {createServer} from 'http';  

const users=[
    {id:1, name:'Umair'},
    {id:2, name:'Ali'},
    {id:3, name:'Ahmed'},
];

//logger middleware
const logger=(req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}

//JSON middleware
const jsonMiddleware=(req, res, next)=>{
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route Handler for Get /api/users
const getUsers=(req, res)=>{
    res.write(JSON.stringify(users));
    res.end();
}

const getUserById=(req, res)=>{
    const id=req.url.split('/')[3];
    const user=users.find(u=>u.id===parseInt(id));
    if(user){
        res.write(JSON.stringify(user));
        res.end();
    }
    else{
        res.writeHead(404);
        res.write(JSON.stringify({message:'User not found'}));
        res.end();
    }
}

const notFound=(req, res)=>{
    res.writeHead(404);
    res.write(JSON.stringify({message:'Route not found'}));
    res.end();
}

const server=createServer((req, res)=>{
    logger(req, res, ()=>{
        jsonMiddleware(req, res, ()=>{
            if(req.method==='GET' && req.url==='/api/users'){
                getUsers(req, res);
            }
            else if(req.method==='GET' && req.url.match(/\/api\/users\/\d+/)){
                getUserById(req, res);
            }
            else{
                notFound(req, res);
            }
        });

    });
    
});

const PORT=5000 || process.env.PORT;
server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));