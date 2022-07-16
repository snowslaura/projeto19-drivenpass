import express, {json} from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config()
import errorHandlingMiddleware from "./middlewares/errorHandlerMiddleware.js"


const app = express();

app.use(cors())
app.use(json())
app.use(errorHandlingMiddleware)

const port = +process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
