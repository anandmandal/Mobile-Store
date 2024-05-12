import React from 'react'

const SignUp = () => {
  return (
      <>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signUpModal">
               <span className='bi bi-person-plus me-1' /> Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="signUpModalLabel">SignUp</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <a href="https://www.google.com" style={{textDecoration:'none'}}>
                            <button className='btn btn-primary w-100 mb-4'>
                                <span className='bi bi-google'/> Sign up with Google
                            </button>
                            </a>
                          <a href="https://www.facebook.com" style={{textDecoration:'none'}}>
                            <button className='btn btn-primary w-100 mb-4'>
                                <span className='bi bi-facebook'/> Sign up with Facebook
                            </button>
                            </a>
                        <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput"  />
                                    
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2" />
                              </div>
                              <div className="mb-3">
                                    <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                                    
                                </div>
                               
                               
                                <button type="submit" className="btn btn-outline-primary w-100">Register</button>
                            </form>
                        </div>
                       
                    </div>
                </div>
            </div>
      </>
  )
}

export default SignUp