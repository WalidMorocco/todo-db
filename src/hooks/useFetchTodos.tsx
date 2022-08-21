import useFetch from "./useFetch"

const useFetchProduct = () => {
  return useFetch(`/todos`);
};

export default useFetchProduct;
