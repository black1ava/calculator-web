const express = require('express');

const app = express();

app.use('/', express.static('client'));
app.use('/assets', express.static('assets'));

app.listen(3000, console.log('server is running on port 3000'));