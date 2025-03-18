const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (optional, if you have an HTML frontend)
app.use(express.static("public"));

// API to read a text file
app.get("/read-file", (req, res) => {
    const filePath = path.join(__dirname, "clues.txt"); // Change this to your file

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading file" });
        }
        res.json({ content: data });        
    });
}); 

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
