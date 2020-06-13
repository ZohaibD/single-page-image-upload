import React from 'react'
import { API_URL } from './config'
export default () => 
  <div className={'loading-wrapper fadein'}>
    <h4>My application is ruuning up, one moment please...{API_URL}</h4>
    <div className={'loading'}>
      <div className={'background'}>
        <i className="icon-heroku"></i>
      </div>
      <div className={'spinner'} />
    </div>
  </div>