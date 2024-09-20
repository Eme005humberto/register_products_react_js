import React, { useEffect, useState } from "react";
import './style.css';

const AddProduct = () =>{
    
const [products,setProducts] = useState([]);

useEffect(() =>{
    fetch('http://localhost:8080/products')//Indicamos la API que devuelve los productos en la base de datos
    .then(response => response.json()) //Convertimos la respuesta en formato JSON
    .then(data => setProducts(data))//Los datos los almacena el parametro data y se guardan en el estado de product
    .catch(error => console.error('Error al obtener productos:',error));//Mostramos un error si se presenta
},[]);
    return (
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
                     <tr>
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
    );
};
export default AddProduct;