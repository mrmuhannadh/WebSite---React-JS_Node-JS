import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import whatsapp from '../../images/Icons/whatsapp-icon.svg';

const ClickToWhatsApp = () => {
  return (
    <div>
      <a href="https://wa.me/9476" target="_blank" rel="noopener noreferrer">
        <img
        src={whatsapp}
        width={40}
        height={40}
        alt="Whatsapp Icon"
        className='whatappBtn'
        />
      </a>
    </div>
  )
}

export default ClickToWhatsApp
