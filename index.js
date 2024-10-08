

import express from "express"
import estudiantesRoutes from"./routes/estudiantes.route.js"

const PORT = 8080
const app = express()

//Middlewares que necesito para intercambiar datos ya sea url o body con mi api
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", estudiantesRoutes)
/*
app.use("/",(req,res)=>{
    res.send("ok")

*/
app.listen(PORT, () => {console.log("Server running")})
app.on("Error", (Error) => {console.log("Ha ocurrido un error en el servidor: ", Error)})


