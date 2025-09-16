const express = require('express');
const path = require('path');

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));



app.listen(5000, () => console.log('Server is running on port 5000'));

