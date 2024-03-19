const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./Routes/product.route')
const app = express()

// MIDDLEWARE
app.use(express.json()); // To use form data from api
app.use(express.urlencoded ({extended: false})); // This code allow to use form-Data type params handling


// ROUTES
app.use("/api/list", productRoute);


app.get('/', (req,res) => {
    res.send('Hello World this is response of get api which written by waqas first time. Keep Learning')
});

mongoose.connect("mongodb+srv://malikwaqas100mw:X8xcxYNDgcmxadga@backenddb.rsdbqpt.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDB").then(() => {
    console.log("Connected to Mongo Database");
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })

}).catch(( error ) => {
    console.log(error.message);

});