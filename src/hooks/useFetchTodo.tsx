import useFetch from './useFetch';


const useFetchTodo = (id: string) => {
    return useFetch(`/todos/${id}`);
};

export default useFetchTodo;
