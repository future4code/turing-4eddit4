import React from 'react';
import { FormPageContainer, FormCard } from './styles';

export default function LoginPage (){
  return(
    <FormPageContainer>
      <FormCard>
        <input type='email' placeholder='EMAIL'></input>
        <input type='password' placeholder='SENHA'></input>
        <button>ENTRAR</button>
      </FormCard>
        <button>CADASTRAR</button>
    </FormPageContainer>
  )
}