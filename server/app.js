const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const WeekMenu = require('');
app.use('/week-menus', WeekMenu);

const port = 3030;
const host = "0.0.0.0";
app.listen(port, host, () => console.log('listening on port : ' + port));
exports.port;
