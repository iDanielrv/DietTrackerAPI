const express = require('express');
const userService = require('./services/userServivce.js');
const bodyParser = require('body-parser');




const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    connectDB();
});

async function connectDB() {
    try {
        mongoose.connect('mongodb+srv://danielrv:gBQNqoHmcG7LMwl0@diettrackercluster.hyzpz.mongodb.net/?retryWrites=true&w=majority&appName=DietTrackerCluster')
        
        const connection = mongoose.connection
    
        connection.on("connected", () => console.log('connected to mongodb'))
        connection.on("error", (err) => {
            console.log('Error connecting to mongodb:::', err);
            process.exit();
            
        })


    } catch (error) {
        console.log();
        
    }
}

// Rota de teste
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
    
});

app.post('/createUser', async (req, res) => {
    const {name, startWeight, currentWeight, goalWeight, startDate, endDate} = req.body;

    const data = {
        name, startWeight, currentWeight, goalWeight, startDate, endDate
    }
    
    createUser(data)
    
    res.send('deu certo')

});


const createUser = async (data) => {
    try {
        const newUser = await userService.createUser(data)
        return newUser
    } catch (error) {
        throw new Error("ERROR:: fail to create new user");
        
    }
}

