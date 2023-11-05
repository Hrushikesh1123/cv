const express = require('express');
const app = express();
const port = 3000;

// Define a custom route for the root URL ('/')
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/newpage', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
  });
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
