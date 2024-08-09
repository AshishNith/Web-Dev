const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5501;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    const { name, email, age } = req.body;
    const data = `Name: ${name}, Email: ${email}, Age: ${age}\n`;

    fs.appendFile('data.txt', data, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to save data' });
        }
        res.status(200).json({ message: 'Data saved successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
