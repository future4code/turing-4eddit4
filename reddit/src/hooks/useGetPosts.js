import { useState, useEffect } from "react";

import axios from 'axios';
import { baseUrl, axiosConfig } from '../constants/axios';

const useGetPosts = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setLoading(true)
    axios
    .get(`${baseUrl}posts`, axiosConfig)
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
