import axios from "axios";


export async function productData(){
    const products = await axios.get("https://fakestoreapi.com/products");
    return products
}