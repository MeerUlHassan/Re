import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://github.com/MeerUlHassan' target='_blank'>{<FaGithub/>}</a>
      <a href='https://www.linkedin.com/in/meer-ul-hassan/' target='_blank'>{<BsLinkedin/>}</a>
    </div>
  )
}

export default HeaderSocials
