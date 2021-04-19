const express = require('express');

const app = express();

app.use('/', express.static('client'));
app.use('/assets', express.static('assets'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log('server is running on port ' + PORT));