import React from 'react'

const Login = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-auto me-2" data-bs-toggle="modal" data-bs-target="#loginModal">
               <span className='bi bi-box-arrow-in-right me-1' /> Login
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="loginModalLabel">Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <a href="https://www.google.com" style={{textDecoration:'none'}}>
                            <button className='btn btn-primary w-100 mb-4'>
                                <span className='bi bi-google'/> Sign in with Google
                            </button>
                            </a>
                            <a href="https://www.facebook.com" style={{textDecoration:'none'}}>
                            <button className='btn btn-primary w-100 mb-4'>
                                <span className='bi bi-facebook'/> Sign in with Facebook
                            </button>
                            </a>
                        <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
                            </form>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login