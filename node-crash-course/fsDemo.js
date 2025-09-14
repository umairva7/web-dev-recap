//import fs from 'fs/promises';
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

// //readFile - Promise-based
// fs.readFile('./test.txt', 'utf8')
//  .then(data => console.log('Promise-based read:', data))
//  .catch(err => console.error(err));  

//readFile - Async/Await
async function readFileAsync() {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log('Async/Await read:', data);
    } catch (err) {
        console.error(err);
    }   
}

readFileAsync();

// writeFile - Asynchronous
const writeFile= async()=>{
    try{
        await fs.writeFile('./test.txt', 'Hello, World!', 'utf8');
        console.log('File written successfully');
    }
    catch(err){
        console.error(err);
    }
};

writeFile();
readFileAsync();

// appendFile - Asynchronous
fs.appendFile('./test.txt', '\nAppended text.', 'utf8', (err) => {
    if (err) throw err;
    console.log('File appended successfully');
    readFileAsync();
});

