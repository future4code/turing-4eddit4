import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { 
  FeedPageContainer, 
  NewPost, SinglePost, 
  SinglePostHeader, 
  SinglePostText, 
  SinglePostFooter, 
  PostLiked, 
  PostDisliked, 
  LikesAndCount,
  SingleComment,
} from './styles';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { baseUrl, axiosConfig } from '../../constants/axios';

export default function SinglePostPage (){
  const [singlePost, setSinglePost] = useState([]);
  const [comments, setComments] = useState([]);

  const token = window.localStorage.getItem('token');
  const history = useHistory();
  const params = useParams();

  const { form, onChange } = useForm({
    text: '',
  });

  useEffect(() => {
    if (token === null) {
      history.push('/');
    }
  }, [history, token]);

  useEffect(() => {
    getSinglePost()
  }, []);

  const getSinglePost = () => {
    axios
    .get(`${baseUrl}posts/${params.PostId}`, 
      axiosConfig
    )
    .then( response => {
      setSinglePost(response.data.post);
      setComments(response.data.post.comments)
    })
    .catch( err => {
      alert(err.message);
    })
  };

  const onClickLike = (PostId, likeChoise ) => {
    const body = {
      "direction": likeChoise,
    };
    axios
      .put(
        `${baseUrl}posts/${PostId}/vote`,
        body, 
        axiosConfig,
      )
      .then(response => {
        getSinglePost()
      })
      .catch(error => {
        console.log('Erro onClickLike: ' 
        + error.data);
      });
  };

  const onClickLikeComment = (CommentId, likeChoise ) => {
    const body = {
      "direction": likeChoise,
    };
    axios
      .put(
        `${baseUrl}posts/${params.PostId}/comment/${CommentId}/vote`,
        body, 
        axiosConfig,
      )
      .then(response => {
        getSinglePost()
      })
      .catch(error => {
        console.log('Erro onClickLike: ' 
        + error.data);
      });
  };

  const createComment = () => {
    const body = {
      'text': `${form.text}`,
    };
    axios
    .post(`${baseUrl}posts/${params.PostId}/comment`, 
      body, 
      axiosConfig
    )
    .then( response => {
      alert('Comentário enviado.');
      getSinglePost();
    })
    .catch( err => {
      console.log(err.message);
    })
  };

  const handleSendComment = event => {
    event.preventDefault();
    createComment();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  return(
    <FeedPageContainer>
      <SinglePost>

        <SinglePostHeader>
          <h4>{singlePost.title}</h4>
          <h4>Por: {singlePost.username}</h4>
          </SinglePostHeader>

        <SinglePostText>
          <p>{singlePost.text}</p>
        </SinglePostText>

        <SinglePostFooter>
          <LikesAndCount>
            <PostLiked onClick={() => onClickLike(singlePost.id, 1)}/>
            <p>{singlePost.votesCount}</p>
            <PostDisliked onClick={() => onClickLike(singlePost.id, -1)}/>
          </LikesAndCount>
          {singlePost.userVoteDirection !== 0 &&
            <p>
              Seu voto foi 
              {singlePost.userVoteDirection === 1? <PostLiked /> : <PostDisliked />}
            </p>
          }
          <p>
            {singlePost.commentsCount} Comentários
          </p>
        </SinglePostFooter>
      </SinglePost>

      <NewPost onSubmit={handleSendComment}>
      <textarea
          value={form.text}  
          rows='6' 
          cols='40'
          type='text'
          name='text' 
          placeholder='DEIXE AQUI O SEU COMENTÁRIO'
          required  
          onChange={handleInputChange} 
        />
        <button>COMENTAR</button>
      </NewPost>

      {comments.map(comment => {
      return(
        <SingleComment key={comment.id}>
          <SinglePostHeader>
            <h4>Comentário de: {comment.username}</h4>
          </SinglePostHeader>

          <SinglePostText>
            <p>{comment.text}</p>
          </SinglePostText>

          <SinglePostFooter>
          <LikesAndCount>
            <PostLiked onClick={() => onClickLikeComment(comment.id, 1)}/>
            <p>{comment.votesCount}</p>
            <PostDisliked onClick={() => onClickLikeComment(comment.id, -1)}/>
          </LikesAndCount>

          {comment.userVoteDirection !== 0 &&
            <p>
              Seu voto foi 
              {comment.userVoteDirection === 1 ? <PostLiked /> : <PostDisliked />}
            </p>
          }
          </SinglePostFooter>
        </SingleComment>
        )
      })}
    </FeedPageContainer>
  )
}