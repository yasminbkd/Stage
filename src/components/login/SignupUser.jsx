import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { register } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import './SignupCompany.css';

export default function SignupUser() {

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const [user, setUser] = useState({
    email: '',
    password: '',
    firstName : '',
    lastName : '',
    userType: "user",


  });

  const handleInputChange = (event) => {
    console.log(user)
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const SignUpUser = async () => {
        
        const response = await register(user);
        
        
        if (response){
           navigate('/dashboard')
        }

        console.log(response)
    }

  return (
    <section className="log-in-page">
      <div className="main-page">
        <div className="welcome">
          <h2>Welcome back</h2>
          <span className="guide">Please enter user details.</span>
        </div>
        <div className="form" >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={user.email || ''}
              onChange={handleInputChange}
             /*  {...register('email', { required: true })} */
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={user.password || ''}
              onChange={handleInputChange}
             /*  {...register('password', { required: true })} */
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
            First Name
            </label>
            <input
              name="firstName"
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your firstName"
              value={user.firstName || ''}
              onChange={handleInputChange}
             /*  {...register('password', { required: true })} */
            />
          </div>


          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
            Last Name
            </label>
            <input
              name="lastName"
              type="lastName"
              className="form-control"
              id="lastName"
              placeholder="Enter your Last Name"
              value={user.lastName || ''}
              onChange={handleInputChange}
             /*  {...register('password', { required: true })} */
            />
          </div>

          {errorMessage && <p className="error">{errorMessage}</p>}

          <div className="actions">
            <label htmlFor="check-box">
              <input type="checkbox" className="check-box" id="check-box" />
              Remember for 30 days
            </label>

            <a href="#!">Forgot Password?</a>
          </div>

          <button onClick={()=>SignUpUser()}  className="btn btn-primary">
            Sign in
          </button>
        </div>

        <p>
          <a href="#!">Don't have an account? Sign up</a>
        </p>
      </div>
      <div className="sub-page">
        <img
          src="https://images.unsplash.com/photo-1675050757561-741bd739bc06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
          alt="image from unsplash"
          className="img"
        />
      </div>
    </section>
  );
}
