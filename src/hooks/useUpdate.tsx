import { useState } from 'react';
import axios from 'axios';
import { Todo } from '../types/Todo';



const useUpdate = (url: string) => {
  const [data, setData] = useState<Todo>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);


  const updateRequest = async (payload: Todo)=> {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.put(url + payload.id, payload);
      setData(response.data);
      console.log(response.data);
      console.log("Record Updated");
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
    

  return { data, loading, error, updateRequest };
};

export default useUpdate;
