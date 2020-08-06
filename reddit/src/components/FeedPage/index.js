import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { 
  FeedPageContainer, 
  NewPost, SinglePost, 
  SinglePostHeader, 
  SinglePostText, 
  SinglePostFooter, 
  PostLiked, 
  PostDisliked, 
  LikesAndCount,
  CommentsWrapper  
} from './styles';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { baseUrl, axiosConfig } from '../../constants/axios';

export default function FeedPage (){
  const token = window.localStorage.getItem('token');
  const [posts, setPosts] = useState([]);
  const { form, onChange } = useForm({
    text: '',
    title: '',
  });

  const history = useHistory();
  useEffect(() => {
    if (token === null) {
      history.push('/');
    }
  }, [history, token]);

  useEffect(() => {
    getPosts();
  },[]);
  
  const getPosts = () => {
    axios
    .get(`${baseUrl}posts`, axiosConfig)
    .then( response => {
      setPosts(response.data.posts)
    })
    .catch( err => {
      console.log(err.message);
    })
  }

  const createPost = () => {
    const body = {
      'text': `${form.text}`,
      'title': `${form.title}`,
    };
    axios
    .post(`${baseUrl}posts`, 
      body, 
      axiosConfig
    )
    .then( response => {
      alert('Post criado!');
      getPosts();
    })
    .catch( err => {
      console.log(err.message);
    })
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSendPost = event => {
    event.preventDefault();
    createPost();
  };

  const onClickLike = (PostId, LikeChoise ) => {
    const body = {
      "direction": LikeChoise,
    };
    axios
      .put(
        `${baseUrl}posts/${PostId}/vote`,
        body, 
        axiosConfig,
      )
      .then(response => {
        getPosts();
      })
      .catch(error => {
        console.log('Erro onClickLike: ' 
        + error.data);
      });
  };

  const onClickComment = (postId) => {
    history.push(`/loggedIn/SinglePostPage/${postId}`);
  };

  return(
    <FeedPageContainer>
      <NewPost onSubmit={handleSendPost}>
        <input
          value={form.title}
          type='text'  
          name='title' 
          placeholder='TÍTULO DO POST'
          required
          onChange={handleInputChange}
        />
        <textarea
          value={form.text}  
          rows='6' 
          cols='40'
          type='text'
          name='text' 
          placeholder='ESCREVA SEU POST'
          required  
          onChange={handleInputChange} 
        />
        <button>POSTAR</button>
      </NewPost>

      {posts.map(post => {
      return(
        <SinglePost key={post.id}>
          <SinglePostHeader>
            <h4>{post.title}</h4>
            <h4>Por: {post.username}</h4>
          </SinglePostHeader>
          <SinglePostText>
            <p>{post.text}</p>
          </SinglePostText>
          <SinglePostFooter>
            <LikesAndCount>
              <PostLiked onClick={() => onClickLike(post.id, 1)}/>
              <p>{post.votesCount}</p>
              <PostDisliked onClick={() => onClickLike(post.id, 0)}/>
            </LikesAndCount>
            <CommentsWrapper onClick={() => onClickComment(post.id)}>
              <p>
                {post.commentsCount} Comentários
              </p>
            </CommentsWrapper>
          </SinglePostFooter>
        </SinglePost>
        )
      })}
    </FeedPageContainer>
  )
}