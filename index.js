const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 3000;
const hotelsRoutes = require("./router/hotels");

// hotels array storrage
const hotels = ["Hilton", "Ritz", "Trianon Palace"];

// hotels route
app.get("/hotels", (req, res) => {
  res.json(hotels);
});

// hotels id - array index
app.get("/hotels/:id", (req, res) => {
  const index = req.params.id;
  res.json(hotels[index]);
});

// Add a new hotel
app.post("/hotels", (req, res) => {
  const hotel = req.body.name;
  hotels.push(hotel);
  res.json({ success: true });
});

// hotels router
app.use("/hotels", hotelsRoutes),
  server.listen(port, () => {
    console.log(`NodeJS server started ${port}`);
  });
