const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("books.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

try {
    server.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}...`);
    });
} catch (err) {
    throw err;
}