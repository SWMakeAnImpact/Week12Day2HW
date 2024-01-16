// Import the Express module - a Node.js framework
const express = require("express");
// Create an instance of express to handle our requests
const app = express();
// Set a port number for the server to listen on
const port = 3000;

// Define a GET route for the home page
app.get("/", function (req, res) {
    // Whenever someone visits the home page, reset the number of bottles to 99
    let number_of_bottles = 99;
    // Send a response to the browser with the number of bottles and a link to take one down
    res.send(
      `${number_of_bottles} Bottles of beer on the wall. <a href="/${number_of_bottles - 1}">take one down, pass it around</a><br/> 
       ${number_of_bottles} little bugs in the code`
    );
});

// Define a GET route that accepts a parameter for the number of bottles
app.get("/:number_of_bottles", function (req, res) {
  // Parse the number of bottles from the URL parameter and convert it to an integer
  let number_of_bottles = parseInt(req.params.number_of_bottles, 10);
  
  // Check if the parsed number is not a number (NaN)
  if (isNaN(number_of_bottles)) {
      // If it's NaN, redirect the user to the home page
      return res.redirect("/");
  }

  // Generate a random number for bugs in the code
  let bugsInCode = number_of_bottles + Math.floor(Math.random() * 10);

  // Check if there are no bottles left
  if (number_of_bottles == 0) {
    // If no bottles are left, send a message and a link to start over
    res.send(
      `${number_of_bottles} Bottles of beer on the wall. <a href="/">start over</a>`
    );
  } else {
    // If there are bottles left, show the count and a link to take one down
    res.send(
      `${number_of_bottles} Bottles of beer on the wall. <a href="/${number_of_bottles - 1}">take one down, pass it around</a><br/> 
       ${bugsInCode} little bugs in the code`
    );
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message to the console when the server starts
  console.log("listening on port", port);
});
