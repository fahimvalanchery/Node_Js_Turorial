/**
 * Importing Packages
 * For Import use  -> require() <- method
 */
const http = require("http");

//
const PORT = 3001;

/**
 * Create the server
 */
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("Welcome");
        res.end();
    }
    if (req.url == "/hello") {
        res.write("<p>hello, world</p>");
        res.end();
    }
    if (req.url == "/users") {
        let users = [
            { _id: 1, name: "N 1" },
            { _id: 2, name: "N 2" },
        ];
        res.write(JSON.stringify(users));
        res.end();
    }
});

// localhost is the default value for 2nd argument
server.listen(PORT, "localhost", () => {
    console.log(`listening for requests on port ${PORT}`);
});
