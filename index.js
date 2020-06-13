require('dotenv').config()
const express = require('express')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('./config')
const path = require("path")

const app = express()

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})
  
app.use(cors()) 

app.use(formData.parse())
app.use(express.static(path.join(__dirname, "client", "build")))

app.get('/wake-up', (req, res) => res.send('ðŸ‘Œ'))

app.post('/image-upload', (req, res) => {
  console.log(process.env.cloud_name)
  const values = Object.values(req.files)
  console.log('values are ', values)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => res.json(results))
    .catch((err) => res.status(400).json(err))
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 8080, () => console.log('server is running on port' , process.env.PORT))