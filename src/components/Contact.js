import React from 'react'

const Contact = () => {
  return (
      <div>
          <div className='container mb-5'>
              <div className='row'>
                  <div className='col-12 text-center py-4 my-4'>
                      <h1>Have Some Question?</h1>
                      <hr/>
                  </div>
              </div>
              <div className='row'>
                  <div className='col-md-5 d-flex justify-content-center'>
                      <img src='/images/contact-us/customer-support.webp' width='500px' height='500px'
                      />
                  </div>
                  <div className='col-md-6'>
                      <form>
                          <div class="mb-3">
                              <label for="exampleForm" class="form-label">Full Name</label>
                              <input type="email" class="form-control" id="exampleForm" placeholder="Anand mandal"/>
                          </div>
                          <div class="mb-3">
                              <label for="exampleFormControlInput1" class="form-label">Email address</label>
                              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                          </div>
                          <div class="mb-3">
                              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                          <button type="submit" className='btn btn-outline-primary '>Send Message</button>
                      </form>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Contact