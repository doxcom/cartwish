import React from 'react'

import './LoginPage.css'

const LoginPage = () => {
  return (
    <section className="align_center form page">
        <form className='authentication_form'>
            <h2>Login Form</h2>
            <div className="form_inputs">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" className='form_text_input' placeholder='Enter your name'/>
                </div>

                  <div>
                    <label htmlFor="">Phone Number</label>
                    <input type="number" className='form_text_input' placeholder='Enter your phone number'/>
                </div>

                <button type=""></button>
            </div>
        </form>
    </section>
  )
}

export default LoginPage