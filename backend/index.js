const express = require('express');
const cors = require('cors')
const cloudinary = require('cloudinary')
const bodyParser = require ('body-parser')
const formData = require('express-form-data')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const app = express();

cloudinary.config({ 
    cloud_name: 'dlpd8r1dd', 
    api_key: 124315552424568, 
    api_secret: 'RhDEb6Mv4c0yQTvFS7_h7HLeF28'
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