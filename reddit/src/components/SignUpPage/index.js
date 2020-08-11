import React from 'react';
import { FormPageContainer, FormCard } from './styles';

import { useHistory } from "react-router-dom";

import useForm from '../../hooks/useForm';

import axios from 'axios';
import { baseUrl } from '../../constants/axios';

export default function SignUpPage (){
  const history = useHistory();
  const { form, onChange } = useForm({
    email: '',
    password: '',
    username: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSignUpButton = event => {
    event.preventDefault();
    handleSignUp();
  };

  const handleSignUp = () => {
    const body = {
      'email': `${form.email}`,
      'password': `${form.password}`,
      'username': `${form.username}`
    };
    axios
      .post(`${baseUrl}signup`, 
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

  return(
    <FormPageContainer>
      <FormCard onSubmit={handleSignUpButton}>
        <input
          name='username' 
          type='text' 
          placeholder='USUÁRIO' 
          value={form.username} 
          onChange={handleInputChange}
          required 
        />
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
        <button>CADASTRAR</button>
      </FormCard>
    </FormPageContainer>
  )
}