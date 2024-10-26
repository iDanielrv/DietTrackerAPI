const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    connectDB();
});

async function connectDB() {
    try {
        mongoose.connect('')
        
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

