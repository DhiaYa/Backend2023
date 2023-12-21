// //Import express
// const express = require('express');
// //Membuat object express
// const app = express();

// /**
//  * Membuat routing
//  * Method get menerima 2 params
//  * param 1 adalah endpoint.
//  * paaram2 callback.
//  * Callback menerima object req and res
//  */
// app.get("/", (req, res) => {
//     res.send("Hello Express!!!");
// });

// //Mendefinisikan port.
// app.listen(3000);

// Import express
const express = require('express');

// make an object express
const app = express();

// using middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route definition
const router = require("./routes/api");
app.use(router);

// port definition
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});