const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST endpoint to process data
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    const user_id = "Samarth_Jangir_08_07_2003"; // Replace with actual name and DOB
    const email = "samarth.jangir2021@vitbhopal.ac.in"; // Replace with your college email
    const roll_number = "21BCE10889"; // Replace with your roll number

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase()); 

    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? 
        [lowercaseAlphabets.sort().reverse()[0]] : [];

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

// GET endpoint to return operation code
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
