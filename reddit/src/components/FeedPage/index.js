import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { 
  FeedPageContainer, 
  NewPost, SinglePost, 
  SinglePostHeader,
  UserWrapper,
  AvatarContainer,
  TittleWrapper,
  PostPic,
  SinglePostText, 
  SinglePostFooter, 
  PostLiked, 
  PostDisliked, 
  LikesAndCount,
  CommentsWrapper  
} from './styles';

import Loader from '../Loader/Loader';

import useForm from '../../hooks/useForm';
import useGetPosts from '../../hooks/useGetPosts';

import axios from 'axios';
import { baseUrl, axiosConfig } from '../../constants/axios';

export default function FeedPage (){
  const token = window.localStorage.getItem('token');
  const [ posts, getPosts, loading ] = useGetPosts();


  const { form, onChange, hadleInputClear } = useForm({
    text: '',
    title: '',
  });

  const history = useHistory();
  useEffect(() => {
    if (token === null) {
      history.push('/');
    }
  }, [history, token]);

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
      hadleInputClear();
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
      { loading ? 
      (<Loader />) : 
      (<> 
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
              <UserWrapper>
                <AvatarContainer 
                  src="https://picsum.photos/10"
                  alt="new"
                />
                <p>Posted by u/{post.username}</p>
              </UserWrapper>
              <TittleWrapper>
                <h4>{post.title}</h4>
              </TittleWrapper>
            </SinglePostHeader>

            <SinglePostText>
              <PostPic>
                <img src="https://picsum.photos/520/320"
                  alt="new"
                />  
              </PostPic>              
              <p>{post.text}</p>
            </SinglePostText>

            <SinglePostFooter>
              <LikesAndCount>
                <PostLiked onClick={() => onClickLike(post.id, 1)}/>
                <p>{post.votesCount}</p>
                <PostDisliked onClick={() => onClickLike(post.id, -1)}/>
              </LikesAndCount>
              {post.userVoteDirection !== 0 &&
                <p>
                  Seu voto foi 
                  {post.userVoteDirection === 1? <PostLiked /> : <PostDisliked />}
                </p>
              }
              <CommentsWrapper onClick={() => onClickComment(post.id)}>
                <p>
                  {post.commentsCount} Comentários
                </p>
              </CommentsWrapper>
            </SinglePostFooter>
          </SinglePost>
          )
        })}
      </>)}
    </FeedPageContainer>
  )
}