import React, { useState } from "react";
import './style.css';

const AddProduct = () => {

  //Creamos el estado para agregar datos del producto y la funcion para modificar
  //el estado
  const [newProducts,setProducts] = useState({
    //Parametros a utilizar
    nameProduct: '',
    unitPrice: '',
    category: ''
  });

  //Funcion para agregar datos al formulario
  const handleSubmit = (e) =>{
    e.preventDefault(); //Evitamos recargar la pagina

    fetch('http://localhost:8080/products/save',{ //Direcccopm de la API guardar producto
      method: 'POST', //metodo que va a ejecutar
      headers:{ //la cabezera sera recibida en formato JSON
        'Content-Type':'application/json',
      },
      body:JSON.stringify(newProducts) //Convertimos los datos de producto enviado a la API en formato JSON
    })
    .then(response => response.json())
    .then(data =>{
      setProducts([...newProducts,data]);
    })
    .catch(error => console.error("Error al agregar producto: ",error));
  };
  return(
    <div className="container mt-5">
    <h2>Agregar nuevo producto</h2>
    <form onSubmit="">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre del producto:</label>
        <input type="text" className="form-control"  value="" onChange="" placeholder="Add name" required />
      </div>
      <div className="mb-3">
      <label className="form-label">Precio Unitario:</label>
      <input type="text" className="form-control" value=""onChange=""placeholder="Add price" required/>
    </div>
    <div className="mb-3">
      <label className="form-label">Categoria:</label>
      <input type="text" className="form-control"value=""onChange="" placeholder="Add category"required />
    </div>

    <button type="submit" className="btn btn-primary">Agregar</button>
  </form>
</div>
);
}
export default AddProduct;