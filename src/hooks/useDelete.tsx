import { useState, useEffect } from 'react';
import axios from 'axios';
import { Todo } from '../types/Todo';



const useDelete = (url: string) => {
  const [data, setData] = useState<Todo>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);


  const deleteRequest = async (payload: Todo)=> {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.delete(url + payload.id);
      setData(response.data);
      console.log("Record Deleted");
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
    

  return { data, loading, error, deleteRequest };
};

export default useDelete;
