import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook  } from '@fortawesome/fontawesome-free-brands'

export default () => (
  <footer>
    <a 
      href='https://facebook.com/EAagle' 
      title='My facebook Account'
      className={'small-button facebook'}
    >
      <FontAwesomeIcon icon={faFacebook} size='3x' color='#fff' />
    </a>
  </footer>
)