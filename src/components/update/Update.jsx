import React from 'react'
import "./Update.css"

const Update = () => {
  return (
    <div>
      
    <main>
        <section id="image-section">
            <h1 id="heading-text">EduKate</h1>
            <p id="heading-subtext">your one stop place for all educational information.</p>
            <div class="image-section">
                <img src="educator.svg" alt="" />
            </div>
        </section>
            
        <section id="form-section">
            <div class="form-section">
                <h1>Welcome to EduKate</h1>
                    <p>Create an account to explore all our course<br/>and connect with mentors</p>
                <form action="submit">
                    
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="email" placeholder="johndoe@example.com"/>
                    <input type="number" placeholder="+2340000000000"/>
                    <input type="password" placeholder="Password" minlength="8" required/>
                    <input type="password" placeholder="Confirm Password" minlength="8" required/> 
                    <input type="text"/>
                    <input type="text"/>
                    <div class="form-control">
                        <div class="labe">
                        <label for="checkbox"> 
                        <input type="checkbox" id="checkbox"/> Click here to agree to our <a href="google.com">terms and conditions.</a>
                        </label>
                    </div>
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        </section>
    </main>

    </div>
  )
}

export default Update
