const express = require("express")

const app = express()

let counter = 0

app.get("/", (request, response) => {

    response.send("<h1 style='color: blue'>Bienvenidos al servidor express")
})

app.get("/visitas", (request, response) => {
    counter ++
    response.send(`La cantidad de visitas es ${counter}`)
})

// app.get("/fyh", (request, response) => {
//     const date =  new.date()
//     response.send({
//         fyh: `${date.toLocalDateString()} ${date.toLocalDateString}`
//     })
// })



const server = app.listen(8080, () => {
    console.log(`Started server http://localhost_${server.address() .port}`)
})