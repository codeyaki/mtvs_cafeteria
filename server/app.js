const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const WeekMenuRouter = require('./src/routes/week-menu-route');
app.use('/week-menus', WeekMenuRouter);

const port = 3030;
const host = "0.0.0.0";
app.listen(port, host, () => console.log('listening on port : ' + port));
exports.port;
