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
    // console.log(request.body);
    const {
        name
    } = request.body;

    const db = dbService.getDBServiceInstance();
    const result = db.insertNewName(name);

    result
        .then(data => response.json({
            data: data
        }))
        .catch(err => console.log(err));
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
app.patch('/update', (request, response) => {
    console.log("/update");
    const {
        id,
        name
    } = request.body;

    const db = dbService.getDBServiceInstance();
    const result = db.updateNameById(id, name);

    result
        .then(data => response.json({
            success: data
        }))
        .catch(err => console.log(err));
});

// Delete
app.delete('/delete/:id', (request, response) => {
    // console.log(request.params);
    const {
        id
    } = request.params;
    const db = dbService.getDBServiceInstance();
    const result = db.deleteRowById(id);

    result
        .then(data => response.json({
            success: data
        }))
        .catch(err => console.log(err));


});

// Listen
app.listen(
    process.env.PORT,
    () => console.log('app is running')
)