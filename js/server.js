const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const databaseFile = 'rsvpDatabase.json';

// Create an endpoint to handle RSVP submissions
app.post('/submit-rsvp', (req, res) => {
    const { name, email, attendance } = req.body;

    // Read existing data from the file
    let rsvpData = [];
    try {
        const data = fs.readFileSync(databaseFile, 'utf-8');
        rsvpData = JSON.parse(data);
    } catch (error) {
        console.error('Error reading database file:', error);
    }

    // Add new RSVP entry
    const newEntry = { name, email, attendance };
    rsvpData.push(newEntry);

    // Write updated data back to the file
    fs.writeFileSync(databaseFile, JSON.stringify(rsvpData, null, 2), 'utf-8');

    res.status(200).json({ message: 'RSVP submitted successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
