import styled from 'styled-components'

export const FeedPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
  button{
    margin: 0.85rem 0 0 0;
  }
`

export const SinglePost = styled.form`
  width: 40vw;
  margin: 1.5rem 0;
  border-radius: 4px;
  border: 1px solid #ccc; 
  background-color: #fff;
`

export const SinglePostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ccc; 
  padding: 0.85rem 0;
  h4{
    margin: 0;
    padding: 0;
  }
`

export const SinglePostText = styled.div`
  min-height: 20vh;
  padding: 0.85rem;
`

export const SinglePostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  padding: 0.85rem;
  p{
    margin: 0;
    padding: 0;
  }
`

export const SingleComment = styled.form`
  width: 40vw;
  margin: 1.5rem 0;
  border-radius: 4px;
  border: 1px solid #ccc; 
  background-color: #fff;
`