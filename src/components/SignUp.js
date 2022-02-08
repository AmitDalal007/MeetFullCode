import React from 'react'

const SignUp = () => {
    return (
        <>
            <div className="_slmcont"> 
                <div className="_msinlogc">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Upload file for SignUp</label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                        <div className="mb-3">
                            <h6>or</h6>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                        </div>
                        <button type="submit" className="btn _hombtn">SignUp</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
