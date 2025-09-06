import http from 'http';

const server=http.createServer((req,res)=>{
    //res.write('Hello World from server.js');
    res.setHeader('Content-Type','application/json');
    res.statusCode=200;
    const user={
        name:'Umair',
        age:30
    }
    res.write(JSON.stringify(user));
    res.end();

});
const PORT=5000 || process.env.PORT;
server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));