const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Endpoint to get data from Books.json
app.get('/books', (req, res) => {
    fs.readFile('./Data/Books.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint to get data from countries-table.json
app.get('/countries', (req, res) => {
    fs.readFile('./Data/countries-table.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint to get data from LazadaProductData.json
app.get('/products', (req, res) => {
    fs.readFile('./Data/LazadaProductData.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
