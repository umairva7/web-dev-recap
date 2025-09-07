import http from 'http';

const server=http.createServer((req,res)=>{
    //res.write('Hello World from server.js');
    if(req.url==='/'){
         res.setHeader('Content-Type','text/html');
        res.write('Homepage');
        res.end();
    }
    else if(req.url==='/api/users'){
         res.setHeader('Content-Type','text/html');
        res.write('Hello World from API');
        res.end();
    }
    else{
         res.setHeader('Content-Type','text/html');
        res.write('Not Found');
        res.end();
    }
    

    //request object
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);

    const user={
        name:'Umair',
        age:30
    }
    // res.write(JSON.stringify(user));
    // res.end();

});
const PORT=5000 || process.env.PORT;
server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));