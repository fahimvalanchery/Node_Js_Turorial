/**
 * Importing Packages
 * For Import use  -> require() <- method
 */
const express = require("express");
const path = require("path"); //node built in



// express app
const app = express();
const PORT = 8080;

/**
 * Get Method
 */
app.get("/", (req, res) => {
    // response with simple Text
    res.send("hello from simple server :)");
});

const getRouters=require('./src/routers/getmethod.router')

app.use('/getmethod',getRouters)



// 404 page
// Keep This in always as last route otherways if you add any route in below it will not work
app.use((req, res) => {
    // send response with status code 404 (Not Found)
    res.status(404).sendFile("./views/404.html", { root: __dirname });
});

app.get("/notwork", (req, res) => {
    // this route will not work, because we puted 404 middleware in top of this route
    //   always return that 404 page
    res.send("this route will not work");
});

// localhost is the default value for 2nd argument
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
