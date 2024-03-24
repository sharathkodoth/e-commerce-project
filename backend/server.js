const express = require("express")
const port = 3001;
const app = express()

app.get("/", (req, res) => {
    res.send("hai iam connected to the server 👽")
})

app.listen(port,() => {
    console.log(`Server connected to port ${port}`)
})