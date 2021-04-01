const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// set up server

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

app.use(express.json());

// connect to mongoDB

mongoose.connect(
    process.env.MDB_CONNECT,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    (err) => {
        if (err) return console.log(err);
        console.log('connnected to mongoDB');
    }
);

// set up routes

app.use("/auth", require("./routers/userRouter"));