const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');

app.use(cors());
app.options('*',cors());

 
//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('public/uploads',express.static(__dirname + 'public/uploads' ))
app.use((err,req,res,next)=>{
    if(err.name === 'UnauthorizedError'){
        // jwt authentication error
       return res.status(401).json({message: "The user is not authorized"})
    }

    if(err.name === 'ValidationError'){
        // validation error
       return res.status(401).json({message:err})
    }
        // default to 500 server error
    return res.status(500).json(err)

})

//routes
const CategoriesRouter = require('./routers/categories');
const OrdersRouter = require('./routers/orders');
const ProductsRouter = require('./routers/products');
const UsersRouter = require('./routers/users');
const res = require('express/lib/response');


const api = process.env.API_URL

//routers
app.use(`${api}/categories`, CategoriesRouter);
app.use(`${api}/orders`, OrdersRouter);
app.use(`${api}/products`, ProductsRouter);
app.use(`${api}/users`, UsersRouter);


//database
mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'

})
.then(()=>{
    console.log('database conncetion is ready....');
}).catch((err)=>{
    console.log('error is: ',err);
})

// app.get(`${api}/products`, (res,req) => {
//     const product = {
//         id : 1,
//         name : 'hair dresser',
//         image : 'some url'

//     }
// res.send('Hello API');
// })

//server

app.listen(3000, () => {
    console.log(api);
    console.log('server is running http://localhost:3000');
})