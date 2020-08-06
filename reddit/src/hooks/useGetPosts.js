import { useState, useEffect } from "react";
import axios from 'axios';
import { baseUrl, axiosConfig } from '../constants/axios';

const useGetPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

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

  return [posts, getPosts];
};

export default useGetPosts;
