const express = require('express');
const cors = require('cors')
const cloudinary = require('cloudinary')
const bodyParser = require ('body-parser')
const formData = require('express-form-data')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const app = express();

cloudinary.config({ 
    cloud_name: 'yourcloud name', 
    api_key: 'api key', 
    api_secret: 'secret key'
  })



app.use(cors())
app.use(formData.parse())

app.post('/image-upload',upload.single('image'),(req,res)=>{
    const values = Object.values(req.files)
        
    console.log('Image ' , values[0].originalFilename)
    
    const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
    Promise
      .all(promises)
      .then(results => res.send(results))
})



app.listen(4444,()=>{
    console.log('App is listening on ',4444)
})