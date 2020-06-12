import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import './my.css'
function App() {
  const [image, setImage] = useState({preview:"",raw:""})
  const handleChange= e => {
    setImage({
              preview:URL.createObjectURL(e.target.files[0])
            })
    const formData = new FormData()
    formData.append('image', e.target.files[0])  
    console.log(formData.get('image'))
    fetch('http://localhost:4444/image-upload',{
      method:'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(res=> console.log(res))

   
  }
    
 
  return (
    <div className="App">
      <header className="App-header">
        <div class="frame">
          <div class="center">
            <div class="title">
              <h1>Drop file to upload</h1>
            </div>
           
            <div class="dropzone">
              <img src="http://100dayscss.com/codepen/upload.svg"  alt='' class="upload-icon" />
              {/* <img src="uploadimage2.jpg" class="upload-icon"></img> */}
              {/* <input type="file" class="upload-input" onChange={e => setImage(Array.from(e.target.files))} /> */}
              <input type="file" class="upload-input" onChange={handleChange} />
            </div>
          </div>
        </div>
      </header>
      <div>
        <FontAwesomeIcon icon={faTimesCircle} />
      </div>
      {
        image.preview ? 
        (<img src={image.preview} alt="dummy" width="300" height="300" />):(<p>no image</p>)
      }

      
    </div>
  );

}


export default App;
