// //import fs from 'fs/promises';
// import fs from 'fs';
// import path from 'path';

// // readFile - Asynchronous
// fs.readFile('./test.txt', 'utf8', (err, data) =>{
//     if (err) throw err;
//     console.log('Asynchronous read:', data);
// }

// );

// // readFile - Synchronous
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log('Synchronous read:', data);

// // //readFile - Promise-based
// // fs.readFile('./test.txt', 'utf8')
// //  .then(data => console.log('Promise-based read:', data))
// //  .catch(err => console.error(err));  

// //readFile - Async/Await
// async function readFileAsync() {
//     try {
//         const data = await fs.readFile('./test.txt', 'utf8');
//         console.log('Async/Await read:', data);
//     } catch (err) {
//         console.error(err);
//     }   
// }

// readFileAsync();

// // writeFile - Asynchronous
// const writeFile= async()=>{
//     try{
//         await fs.writeFile('./test.txt', 'Hello, World!', 'utf8');
//         console.log('File written successfully');
//     }
//     catch(err){
//         console.error(err);
//     }
// };

// writeFile();
// readFileAsync();

// // appendFile - Asynchronous
// fs.appendFile('./test.txt', '\nAppended text.', 'utf8', (err) => {
//     if (err) throw err;
//     console.log('File appended successfully');
//     readFileAsync();
// });

//---------------------------------------------------------------------------------------------------------------------------------------------------

import fs from 'fs/promises';   // only promise-based fs

const filePath = './test.txt';

// Async function to demonstrate all operations
async function runFileOps() {
  try {
    // 1. Write (overwrites file if exists, creates if not)
    await fs.writeFile(filePath, 'Hello, World!', 'utf8');
    console.log('✅ File written successfully');

    // 2. Read file
    let data = await fs.readFile(filePath, 'utf8');
    console.log('📖 File content after write:', data);

    // 3. Append file
    await fs.appendFile(filePath, '\nAppended text.', 'utf8');
    console.log('➕ Text appended successfully');

    // 4. Read again after append
    data = await fs.readFile(filePath, 'utf8');
    console.log('📖 File content after append:', data);

  } catch (err) {
    console.error('❌ Error:', err);
  }
}

// Run everything
runFileOps();
