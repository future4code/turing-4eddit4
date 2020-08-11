import { useState } from "react";

import axios from 'axios';
import { baseUrl } from '../constants/axios';

const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)
  const token = window.localStorage.getItem('token');
  
  const getPosts = () => {
    setLoading(true)
    axios
    .get(`${baseUrl}posts`,   
      {headers: {
      Authorization : token
      }})
    .then( response => {
      const somePosts = (response.data.posts)
      setPosts(somePosts.slice(0, 10));
      setLoading(false)
    })
    .catch( err => {
      console.log(err.message);
      setLoading(false)
    })
  }

  return [posts, getPosts, loading];
};

export default useGetPosts;
