/**
 * Importing Packages
 * For Import use  -> require() <- method
 */
const http = require("http");
const fs = require("fs");

//
const PORT = 3000;

/**
 * Create the server
 */
const server = http.createServer((req, res) => {
    // set header content type
    res.setHeader("Content-Type", "text/html");

    // routing
    // checking the requested URL
    let path = "./views/";
    // set the path /views/<fileName>
    switch (req.url) {
        case "/":
            // on url http://localhost:3000
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            // on url http://localhost:3000/about
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-us":
            // on url http://localhost:3000/about
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            res.end();
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
    }

    // read the file using file path and fs module send html
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        // res.write(data); //same functionality for both code
        res.end(data);
    });
});

// localhost is the default value for 2nd argument
server.listen(PORT, "localhost", () => {
    console.log(`listening for requests on port ${PORT}`);
});
