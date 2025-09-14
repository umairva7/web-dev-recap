import fs from 'fs';
import path from 'path';

// readFile - Asynchronous
fs.readFile('./test.txt', 'utf8', (err, data) =>{
    if (err) throw err;
    console.log('Asynchronous read:', data);
}

);

// readFile - Synchronous
const data = fs.readFileSync('./test.txt', 'utf8');
console.log('Synchronous read:', data);