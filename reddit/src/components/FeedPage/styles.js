import styled from 'styled-components';
import { UpArrow } from '@styled-icons/boxicons-solid/UpArrow'
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow'

export const FeedPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dae0e6;
`;
export const NewPost = styled.form`
  width: 40vw;
  text-align: center;
  margin: 1rem 0;
  padding: 0.5rem 0;
  border-radius: 4px;
  border: 1px solid #ccc; 
  background-color: #fff;
  textarea{
    max-width: 95%;
  }
  input{
    max-width: 95%;
  }
  button{
    margin: 0.85rem 0 0 0;
  }
`;
export const SinglePost = styled.form`
  width: 40vw;
  margin: 1.5rem 0;
  border-radius: 4px;
  border: 1px solid #ccc; 
  background-color: #fff;
`;
export const SinglePostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc; 
  padding: 0.85rem;
  h4{
    margin: 0;
    padding: 0;
  }
`;
export const SinglePostText = styled.div`
  min-height: 20vh;
  padding: 0.85rem;
`;
export const SinglePostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  padding: 0.85rem;
  p{
    margin: 0;
    padding: 0;
  }
`;
export const LikesAndCount = styled.div`
  display: flex;
`;
export const PostLiked = styled(UpArrow)`
  margin: 0 0.5rem;
  width: 1rem;
  color: #7d7a7a;
  cursor: pointer;
  &:hover{
    color: #0079d3;
  }
`;
export const PostDisliked = styled(DownArrow)`
  margin: 0 0.5rem;
  width: 1rem;
  color: #7d7a7a;
  cursor: pointer;
  &:hover{
    color: #0079d3;
  }
`;

export const CommentsWrapper = styled.div`
  cursor: pointer;
`