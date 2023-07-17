import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { register } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import './SignupCompany.css';
import loginImage from '../../images/Authentication-pana.png';

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
          <h2>Bienvenue</h2>
          <span className="guide">Veuillez entrer les détails de l'utilisateur.</span>
        </div>
        <div className="form" >
        <div className="mb-3">
            <label className="form-label">
            Prénom
            </label>
            <input
              name="firstName"
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Entez votre Prénom"
              value={user.firstName || ''}
              onChange={handleInputChange}
             /*  {...register('password', { required: true })} */
            />
          </div>


          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
            Nom
            </label>
            <input
              name="lastName"
              type="lastName"
              className="form-control"
              id="lastName"
              placeholder="Entez votre Nom"
              value={user.lastName || ''}
              onChange={handleInputChange}
             /*  {...register('password', { required: true })} */
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Entez votre Email"
              value={user.email || ''}
              onChange={handleInputChange}
             /*  {...register('email', { required: true })} */
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Entez votre mot de passe"
              value={user.password || ''}
              onChange={handleInputChange}
             /*  {...register('password', { required: true })} */
            />
          </div>

          
          {errorMessage && <p className="error">{errorMessage}</p>}

          <div className="actions">
            <a href="#!">Mot de passe oublié?</a>
          </div>

          <button onClick={()=>SignUpUser()}  className="btn btn-primary">
            S'identifier
          </button>
        </div>
      </div>
      <div className="sub-page">
      <img
          src={loginImage}
          alt="Login"
          className="img"
        />
      </div>
    </section>
  );
}
