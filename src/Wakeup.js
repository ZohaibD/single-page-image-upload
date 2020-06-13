import React from 'react'

export default () => 
  <div className={'loading-wrapper fadein'}>
    <h4>My application is ruuning up, one moment please...</h4>
    <div className={'loading'}>
      <div className={'background'}>
        <i className="icon-heroku"></i>
      </div>
      <div className={'spinner'} />
    </div>
  </div>