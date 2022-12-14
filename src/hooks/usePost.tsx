import { useState } from 'react';
import axios from 'axios';
import { Todo } from '../types/Todo';

const usePost = (url: string) => {
  const [data, setData] = useState<Todo>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);


  const postRequest = async (payload: Todo)=> {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.post(url, payload);
      setData(response.data);
      // console.log(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
    

  return { data, loading, error, postRequest };
};

export default usePost;
