import axios from "axios";

const PRODUCTO_API_URL = "http://localhost:8080/products";
class ProductosService{
    getAllProducts(){
        return axios.get(PRODUCTO_API_URL);
    }
}
export default new ProductosService();