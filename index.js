const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 3000;
const hotelsRoutes = require("./router/hotels");

// hotels array storrage
const hotels = ["Hilton", "Ritz", "Trianon Palace"];
console.log(hotels);

// hotels router
app.use("/hotels", hotelsRoutes);

// Setup Server
server.listen(port, () => {
  console.log(`NodeJS server started ${port}`);
});
