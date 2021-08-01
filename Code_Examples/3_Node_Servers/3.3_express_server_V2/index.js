/**
 * Importing Packages
 * For Import use  -> require() <- method
 */
const express = require("express");
const path = require("path"); //node built in

//
const data = require("./data");

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
app.get("/home", (req, res) => {
    // response with Html
    res.send("<p>home page</p>");
});

app.get("/about", (req, res) => {
    // response with Html file
    res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/aboutnew", function (req, res) {
    // response with Html file with another code structure
    res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.get("/about-us", (req, res) => {
    // redirects to another path
    res.redirect("/about");
});

app.get("/users", (req, res) => {
    // let users=data.users
    let { users } = data; //same functionality of above code
    //   check the request contain any query is there or not
    if (req.query && Object.entries(req.query).length) {
        // query is not an empty object
        let { age } = req.query;
        // check if age is in query object
        if (age) {
            let selectedUsers = [];
            for (let index = 0; index < users.length; index++) {
                //   checking age is same with query age
                if (users[index].age == age) {
                    selectedUsers.push(users[index]);
                }
            }
            res.send({ users: selectedUsers });
        } else {
            res.send({ msg: "Invalid query values" });
        }
    } else {
        // there is no query, is  {}
        res.send({ users });
    }
});

app.get("/users/:id", (req, res) => {
    // let users=data.users
    let { users } = data; //same functionality of above code
    // return selected User

    // access id from req
    let userId = req.params.id;
    let selected_user = {};
    for (let index = 0; index < users.length; index++) {
        if (users[index]._id == userId) {
            selected_user = users[index];
            res.send({ selected_user });
            return; // this return will stop if the user id selected, no nee to loop till last
        }
    }
    //   if it is already returned, then this code will not execute
    console.log("this will not execute if user is selecetd");
    res.send({ selected_user });
});

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
