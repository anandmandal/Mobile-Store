import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
      <div>
          <div className='container py-5 my-5'>
              <div className='row'>
                  <div className='col-md-6'>
                      <h1 className='text-primary fw-bold'>About Us</h1>
                      <p className='lead mb-4'>
                          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                          <br />
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


                      </p>
                      <NavLink to='/contact' className='btn btn-outline-primary px-3'>Contact Us</NavLink>
                  </div>
                  <div className='col-md-6 d-flex justify-content-center'>
                      <img src='/images/about.webp' alt='about image' width='100%' />
                      
                  </div>
              </div>
          </div>
    </div>
  )
}

export default About