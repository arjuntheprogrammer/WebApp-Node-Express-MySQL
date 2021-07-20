const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

const dbService = require('./dbService');

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// Create
app.post('/insert', (request, response) => {

});

// Read
app.get('/getAll', (request, response) => {
    console.log("/getAll");
    const db = dbService.getDBServiceInstance();
    const result = db.getAllData();

    result
        .then(data => response.json({
            data: data
        }))
        .catch(err => console.log(err));

});
// Update


// Delete

app.listen(
    process.env.PORT,
    () => console.log('app is running')
)