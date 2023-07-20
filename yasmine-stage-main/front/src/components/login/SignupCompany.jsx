import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { register } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import './SignupCompany.css';
import loginImage from '../../images/Authentication-pana.png';

export default function SignupCompany() {

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const [user, setUser] = useState({
    email: '',
    password: '',
    address : '',
    companyName : '',
    userType: "company",


  });

  const handleInputChange = (event) => {
    console.log(user)
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const SignUpUser = async () => {
        
        const response = await register(user);
        
        
        if (response){
           navigate('/')
        }

        console.log(response)
    }

  return (
    <section className="log-in-page">
      <div className="main-page">
        <div className="welcome">
          <h2>Bienvenue</h2>
          <span className="guide">Veuillez entrer les détails de votre entreprise.</span>
        </div>
        <div className="form" >
        <div className="mb-3">
            <label htmlFor="companyName" className="form-label">
            Nom de l'entreprise
            </label>
            <input
              name="companyName"
              type="CompanyName"
              className="form-control"
              id="CompanyName"
              placeholder="Entrer le Nom de l'entreprise"
              value={user.companyName || ''}
              onChange={handleInputChange}
             /*  {...register('password', { required: true })} */
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Adresse
            </label>
            <input
              name="address"
              type="text"
              className="form-control"
              id="adresse"
              placeholder="Entrer votre Adresse"
              value={user.address || ''}
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
              placeholder="Entrer votre Email"
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
              placeholder="Entrer votre mot de passe"
              value={user.password || ''}
              onChange={handleInputChange}
             /*  {...register('password', { required: true })} */
            />
          </div>

          {errorMessage && <p className="error">{errorMessage}</p>}

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
