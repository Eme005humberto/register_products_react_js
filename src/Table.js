import React, { useEffect, useState } from "react";
import './style.css';
import ProductosService from "./ProductosService";
import { Link } from "react-router-dom";

const AddProduct = () =>{
const [products,setProducts] = useState([]);

useEffect(() =>{
    ProductosService.getAllProducts().then(response =>{
        setProducts(response.data);
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })    
},[])
    return (
        <div className="container">
            <Link to={'/add-product'} className="btn btn-primary">Agregar producto</Link>
            <table className="table table-striped container mt-5">
            <thead>
                <tr>
                    <td>Id Producto</td>
                    <td>Nombre del Producto</td>
                    <td>Precio unitario</td>
                    <td>Categoria</td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                </tr>
            </thead>
            <tbody>
                {products.map(product =>(
                     <tr key={product.idProduct}>
                     <td>{product.idProduct}</td>
                     <td>{product.nameProduct}</td>
                     <td>{product.unitPrice}</td>
                     <td>{product.category}</td>
                     <td><button className="btn btn-warning">Modificar</button></td>
                     <td><button className="btn btn-danger">Eliminar</button></td>
                 </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};
export default AddProduct;