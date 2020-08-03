import React from 'react';
import { FormPageContainer, FormCard } from './styles';

export default function SignUpPage (){
  return(
    <FormPageContainer>
      <FormCard>
        <input type='text' placeholder='USUÁRIO'></input>
        <input type='email' placeholder='EMAIL'></input>
        <input type='password' placeholder='SENHA'></input>
        <button>CADASTRAR</button>
      </FormCard>
    </FormPageContainer>
  )
}