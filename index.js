const express = require('express');
const app = express();
const path = require('path');
const config = require('./config/database');
const mongoose = require('mongoose');
const auth = require('./routes/authentication');
const blog = require('./routes/blogs');
const nutrition = require('./routes/nutrition');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/user');
const Info = require('./models/physicalInfo');
const Meals = require('./models/meal');
const Groceries = require('./models/grocerie');
mongoose.Promise = global.Promise;




mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('Could NOT connect to database: ' + err);
    }
    else {
        console.log('Connected to database: ' + config.uri);
    }
});


// cors
app.use(cors({
    origin: 'http://localhost:4200'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
// old
// app.use(express.static(path.join(__dirname + '/client/dist')));
//// new
// app.use(express.static(path.join(__dirname + '/client/dist/client')));

app.use('/authentication', auth);
app.use('/blogs', blog);
app.use('/nutrition', nutrition);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
// old
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/dist/index.html'));
// });
 ////// new
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/dist/client/index.html'));
// });

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Server listening on port 8080');
});