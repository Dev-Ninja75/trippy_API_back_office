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

// hotels id => array index
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

// Hotel name update
app.put("/hotels/:id?name=newname", (req, res) => {
  // /hotels/id:mqjslkhqsdh ?name=Ibis
  console.log(req.query);
  console.log(req.params);
});

// hotels router
app.use("/hotels", hotelsRoutes);

// Setup Server
server.listen(port, () => {
  console.log(`NodeJS server started ${port}`);
});
