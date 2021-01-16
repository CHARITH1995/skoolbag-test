const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/user.routes');
const con = require('./config/connection/connection');


app.use(express.json({extended:false}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({credentials: true}));

app.use('/api/v1/user',userRoutes);





//textFile routes
//var textFileRoute = require('./routes/textFile.routes');


//nodejs running port assignment
const PORT = process.env.PORT || 8000

//app.use('/api/v1/textFile', textFileRoute);



server.listen(PORT, () => console.log(`good to go ${PORT}`));

module.exports = app;
