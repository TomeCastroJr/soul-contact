import express from "express";

const app = express();

mongoose.connect(process.env.MONGODB_URL)
.then( () => {
    console.log("MongoDb conectado!")
}).catch((err) => {
    console.log(`ERROR: ${err}`)
})

app.use(express.json());



const PORT = 3333;
app.listen(PORT, ()=> console.log(`O servidor está rodando na porta ${PORT}`))