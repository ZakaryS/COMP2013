// Initialization
const express = require("express");
const server = express();
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const {DB_URI} = process.env;
const cors = require("cors");
const Contact = require("./models/contact");

// Middleware
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cors());

// Database Connection and Server Listening
mongoose.connect(DB_URI).then(() => {
    server.listen(port, () => {
        console.log(`Database is connected.\nServer is listening on ${port}.`);
    });
}).catch((error) => console.log(error.meessage));

// Routes
server.get("/", (request, response) => {
    response.send("Server is Live!");
});

server.get("/contacts", async (request, response) => {
    try{
        const contacts = await Contact.find();
        response.send(contacts);
    } catch(error) {
        response.status(500).send({message: error.message});
    }
});

server.post("/contacts", async (request, response) => {
    const { name, email, phone, address, image } = request.body;
    const newContact = new Contact({
        name,
        contact: {
            email,
            phone,
            address,
        },
        image,
    });
    try {
        await newContact.save();
        response.status(200).send({message: "Contact is added successfully!"});
    } catch(error) {
        response.status(400).send({message: error.message});
    }
})