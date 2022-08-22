const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const MenuRouter = require('./src/routes/menu-route');
app.use('/menus', MenuRouter);

const PlanRouter = require('./src/routes/plan-route');
app.use('/plans', PlanRouter)

const {swaggerUi, specs} = require('./src/swagger/swagger-specs.js');
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(specs, {explorer: true}));

const port = 3030;
const host = "0.0.0.0";
app.listen(port, host, () => console.log('listening on port : ' + port));
exports.port;
