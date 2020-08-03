import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FeedPageContainer, NewPost, SinglePost, SinglePostHeader, SinglePostText, SinglePostFooter } from './styles';

import axios from 'axios';
import { baseUrl, axiosConfig } from '../../constants/axios';

export default function FeedPage (){
  const token = window.localStorage.getItem('token');
  const [allPosts, setAllPosts] = useState([]);

  const history = useHistory();
  useEffect(() => {
    if (token === null) {
      history.push('/');
    }
  }, [history, token]);

  useEffect(() => {
    axios
    .get(`${baseUrl}posts`, axiosConfig)
    .then( response => {
      setAllPosts(response.data.posts);
    })
    .catch( err => {
      console.log(err.message);
    })
  },[]);

  return(
    <FeedPageContainer>
      <NewPost>
        <textarea type='text' placeholder='ESCREVA SEU POST'></textarea>
        <button>POSTAR</button>
      </NewPost>
{/* 
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
      </SinglePost> */}
      {allPosts.map(post => {
      return(
        <SinglePost key={post.id}>
          <SinglePostHeader>
            <h4>{post.username}</h4>
          </SinglePostHeader>
          <SinglePostText>
            <p>{post.text}</p>
          </SinglePostText>
          <SinglePostFooter>
            <div>
              <p>{post.votesCount}</p>
            </div>
            <div>
              <p>{post.commentsCount} Comentários</p>
            </div>
          </SinglePostFooter>
        </SinglePost>
        )
      })}

    </FeedPageContainer>
  )
}