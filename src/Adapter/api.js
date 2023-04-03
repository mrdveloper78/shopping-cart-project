import axios from "axios";

// ---------- BASE URL ----------
const baseUrl = "https://fakestoreapi.com";

const getProducts = async () => {
    const response = await axios.get(baseUrl+'/products');
    console.log(response)
    return response.data;
}



export {getProducts};