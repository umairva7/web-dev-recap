import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname); 

const server = http.createServer(async(req, res) => {
    //res.write('Hello World from server.js');

    try {
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
                
            }
            else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
             
            }
            else {
                throw new Error('This is not a valid URL');
                
            }
            const data = await fs.readFile(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        }
        else {
            throw new Error('This is not a GET request');
        }
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.write('Server Error');
        res.end();
    }



    const user = {
        name: 'Umair',
        age: 30
    }
    // res.write(JSON.stringify(user));
    // res.end();

});
const PORT = 5000 || process.env.PORT;
//server.listen(PORT, () => console.log(`Server running on port ${PORT}`));