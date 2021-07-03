const express = require('express');
const routes = require('./routes');
const logger = require('morgan');
const cors = require('cors');

const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors());

app.use(routes);

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})