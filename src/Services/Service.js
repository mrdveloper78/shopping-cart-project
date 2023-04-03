import { getProducts } from "../Adapter/api";


class ProductServices {

    async getAllProducts () {
        return await getProducts();
    }

}


export default ProductServices;