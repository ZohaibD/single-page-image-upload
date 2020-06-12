import React from 'react'



export default props => 
  props.images.map((image, i) =>
    <div key={i} className='fadein'>
        <h1>hello i am zohaib </h1>
      <img src={image.secure_url} alt='' />
    </div>
  )