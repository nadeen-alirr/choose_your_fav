
import React, { useState } from 'react';
import './SignIn.css';
import { Button } from 'react-bootstrap';

const Signin = () => {

    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [error,seterror]=useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const emailRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      
        if (!email) {
          seterror('Please enter your email');
        } else if (!email.match(emailRegex)) {
          seterror('Please enter a valid email');
        } else if (!password) {
          seterror('Please enter your password');
        }  else {
          // Custom validation passes, proceed with form submission
          submitForm();
        }
      };

    const submitForm = () => {
        const formData = { email, password };
        console.log('Form data:', formData);
      
        setemail('');
        setpassword('');
        seterror('');

      };


      return (
        <div className="container d-flex align-items-center justify-content-center">
          <div className="signin-container p-5">
            <h2>Sign In</h2>
            <form className="signin-form" onSubmit={handleFormSubmit}>
              <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
              </div>
             <div>
             {error && <p className='errors d-flex justify-content-start ' style={{ color: 'red' }}>{error}</p>}
             </div>
              <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
              </div>
              <Button type="submit" className="signin-button">
                Sign In
              </Button>
            </form>
            {password && (
              <ul className="password-conditions ">
                <li className={password.match(/.*[a-z].*/) ? 'checked' : 'unchecked'}>
                  Contains at least one lowercase letter
                </li>
                <li className={password.match(/.*[A-Z].*/) ? 'checked' : 'unchecked'}>
                  Contains at least one uppercase letter
                </li>
                <li className={password.match(/.*\d.*/) ? 'checked' : 'unchecked'}>
                  Contains at least one number
                </li>
                <li className={password.length >= 8 ? 'checked' : 'unchecked'}>
                  Is at least 8 characters long
                </li>
              </ul>
            )}
          </div>
        </div>
      );
};

export default Signin;

