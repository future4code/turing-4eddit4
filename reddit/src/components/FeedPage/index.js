import React from 'react';
import { FeedPageContainer, NewPost, SinglePost, SinglePostHeader, SinglePostText, SinglePostFooter } from './styles';

export default function FeedPage (){
  return(
    <FeedPageContainer>
      <NewPost>
        <textarea type='text' placeholder='ESCREVA SEU POST'></textarea>
        <button>POSTAR</button>
      </NewPost>
      <SinglePost>
        <SinglePostHeader>
          <h4>Nome do usuário</h4>
        </SinglePostHeader>
        <SinglePostText>
          <p>Texto do post</p>
        </SinglePostText>
        <SinglePostFooter>
          <div>
            <p>0</p>
          </div>
          <div>
            <p>0 Comentários</p>
          </div>
        </SinglePostFooter>
      </SinglePost>

      <SinglePost>
        <SinglePostHeader>
          <h4>Nome do usuário</h4>
        </SinglePostHeader>
        <SinglePostText>
          <p>Texto do post</p>
        </SinglePostText>
        <SinglePostFooter>
          <div>
            <p>0</p>
          </div>
          <div>
            <p>0 Comentários</p>
          </div>
        </SinglePostFooter>
      </SinglePost>

      <SinglePost>
        <SinglePostHeader>
          <h4>Nome do usuário</h4>
        </SinglePostHeader>
        <SinglePostText>
          <p>Texto do post</p>
        </SinglePostText>
        <SinglePostFooter>
          <div>
            <p>0</p>
          </div>
          <div>
            <p>0 Comentários</p>
          </div>
        </SinglePostFooter>
      </SinglePost>
    </FeedPageContainer>
  )
}