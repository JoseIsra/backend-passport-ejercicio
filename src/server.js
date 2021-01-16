const express = require('express');
const cors = require('cors');
// const session = require('express-session');

const app = express();
require('./dbonfig/dbconfig');

const PORT = 8080;
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
    
}));


// app.use(session({
//     secret:"my super secrete very secret",
//     resave: true,
//     saveUninitialized: true
// }));




app.use('/user', require('./routes/user'));

app.listen (process.env.PORT || PORT, console.log("beep beep server living"));