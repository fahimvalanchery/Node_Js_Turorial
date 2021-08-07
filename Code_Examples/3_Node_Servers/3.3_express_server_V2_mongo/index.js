/**
 * Importing Packages
 * For Import use  -> require() <- method
 */
const express = require("express");
const path = require("path"); //node built in
const { users } = require("./data");



// express app
const app = express();
const PORT = 8080;
app.set('view engine', 'ejs');
/**
 * Get Method
 */
app.get("/", (req, res) => {
    // response with simple Text
    res.send("hello from simple server :)");
});
app.get("/users", (req, res) => {
    // res with ejs file
    res.render('users',{users:[],title:"MY Users"});
});

// for post method
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const getRouters=require('./src/routers/getmethod.router')
const postRouters=require('./src/routers/postRouter.router')

app.use('/getmethod',getRouters)

app.use('/postmethod',postRouters)



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
