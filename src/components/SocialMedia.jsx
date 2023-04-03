import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.linkedin.com/in/tapuleasa-marcel-6065a3139/' target='_blank' rel='noreferrer'><BsLinkedin/></a>
            
        </div>
        <div>
          <a href='https://www.facebook.com/tapuleasa.marcel/' target='_blank' rel='noreferrer'><FaFacebookF/></a>
            
        </div>
        <div>
          <a href='https://github.com/marcel-tapuleasa' target='_blank' rel='noreferrer'><BsGithub/></a>
           
        </div>
    </div>
  )
}

export default SocialMedia;