import React from 'react';
import { FeedPageContainer, NewPost, SinglePost, SinglePostHeader, SinglePostText, SinglePostFooter, SingleComment } from './styles';

export default function SinglePostPage (){
  return(
    <FeedPageContainer>
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

      <NewPost>
        <textarea type='text' placeholder='ESCREVA SEU POST'></textarea>
        <button>COMENTAR</button>
      </NewPost>

      <SingleComment>
        <SinglePostHeader>
          <h4>Nome do usuário</h4>
        </SinglePostHeader>
        <SinglePostText>
          <p>Texto do comentário</p>
        </SinglePostText>
        <SinglePostFooter>
          <div>
            <p>0</p>
          </div>
        </SinglePostFooter>
      </SingleComment>

    </FeedPageContainer>
  )
}