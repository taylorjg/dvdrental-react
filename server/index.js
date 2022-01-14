const express = require("express")
const path = require("path")

const BUILD_FOLDER = path.resolve(__dirname, "..", "build")

const app = express()
app.use(express.static(BUILD_FOLDER))

const port = process.env.PORT || 3050
app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
