import axios from "axios";

const BASE_URL = 'https://dummyjson.com/products';

const useGetProducts = () => {
    axios.get(BASE_URL).then(data => console.log({data}));
};

export default useGetProducts;