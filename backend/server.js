const app = require('./app')


const dotenv = require('dotenv')


//Config

dotenv.config({path:"backend/config/config.env"});

const app = express()

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on ${process.env.PORT}`)
})