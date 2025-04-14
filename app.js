const express = require('express');

const app = express();
const port = 3000;
const index = require('./routes/index');
const products = require('./routes/products');
const orders = require('./routes/orders');
const users = require('./routes/users');
// Définir EJS comme moteur de template
app.set('view engine', 'ejs');

// Définir le dossier des vues
app.set('views', __dirname + '/views');
app.use('/', index);
app.use('/', products);
app.use('/', orders);
app.use('/', users);


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bricardnathan:root@clusterecommerce.gkwaycy.mongodb.net/?retryWrites=true&w=majority&appName=ClusterEcommerce";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log('Serveur lancé sur le port 3000');
});
