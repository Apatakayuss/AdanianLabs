import React from 'react'
import "./Register.css"


const Register = () => {
  return (
    <div className='container-top'>

        <div className="form-container-top">
            <form action="submit">
                <label htmlFor="email"> Email Address: <br/>
                    <input type="text" id='email' required placeholder='jogndoe@gmail.com'/>
                </label><br/>
    
                <label htmlFor="btnn">
                    <button id="btnn" >Register</button>
                </label>
            </form>
        </div>
    </div>
  )
}

export default Register
