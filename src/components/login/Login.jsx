import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import './SignupCompany.css';

export default function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit } = useForm();

  const handleSignIn = async (data) => {
    try {
      const response = await login({ email: data.email, password: data.password });
      if (response) {
        navigate('/dashboard');
      }
    } catch (error) {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };  

  return (
    <section className="log-in-page">
      <div className="main-page">
        <div className="welcome">
          <h2>Welcome back</h2>
          <span className="guide">Please sign in.</span>
        </div>
        <form className="form" onSubmit={handleSubmit(handleSignIn)}>
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
              {...register('email', { required: true })}
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
              {...register('password', { required: true })}
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

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>

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
