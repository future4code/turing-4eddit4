import React from 'react';
import { FormPageContainer, FormPageCard } from './styles';
import { useHistory } from "react-router-dom";

import useForm from '../../hooks/useForm';

import axios from 'axios';
import { baseUrl } from '../../constants/axios';

export default function LoginPage (){
  const history = useHistory();
  const { form, onChange } = useForm({
    email: '',
    password: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleLoginButton = event => {
    event.preventDefault();
    handleLogin();
  };

  const handleLogin = () => {
    const body = {
      'email': `${form.email}`,
      'password': `${form.password}`
    };
    axios
      .post(`${baseUrl}login`, 
        body
      )
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        history.push('/loggedIn/FeedPage');
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const goToSignUpPage = () => {
    history.push('/loggedIn/SignUpPage');
  };

  return(
    <FormPageContainer>
      <FormPageCard>
        <form onSubmit={handleLoginButton}>
        <input
            name='email' 
            type='email' 
            placeholder='EMAIL' 
            value={form.email} 
            onChange={handleInputChange}
            required 
          />
          <input
            name='password' 
            type='password' 
            placeholder='SENHA' 
            value={form.password} 
            onChange={handleInputChange} 
            required
          />   
          <button>ENTRAR</button>
        </form>
          <button onClick={goToSignUpPage}>CADASTRAR</button>  
      </FormPageCard>
    </FormPageContainer>
  )
}