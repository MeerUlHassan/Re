import React from 'react'
import newCv from '../../assets/newCv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={newCv} className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
