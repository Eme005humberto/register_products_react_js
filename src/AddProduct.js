import React, { useState } from "react";
import './style.css';

const AddProduct = () => {
  const [nombre,setnombre] = useState('');
  const [precio,setprecio] = useState('');
  const [categoria,setcategoria] = useState('');

const handleSubmit = (e) =>{
  e.preventDefault();
  const productos = {nombre,precio,categoria};
  console.log(productos);
}
  return(
    <div className="container mt-5">
       <form onSubmit={handleSubmit}></form>
    <h2>Agregar nuevo producto</h2>
    <form >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre del producto:</label>
        <input type="text" 
        name="nombre"
        className="form-control" 
        value={nombre}
        onChange={(e) => setnombre(e.target.value)} 
        placeholder="Add name" 
        required />
      </div>
      <div className="mb-3">
      <label className="form-label">Precio Unitario:</label>
      <input type="text"
      name="precio" 
      className="form-control" 
      value={precio}
      onChange={(e) => setprecio(e.target.value)} 
      placeholder="Add price" 
      required/>
    </div>
    <div className="mb-3">
      <label className="form-label">Categoria:</label>
      <input type="text"
      name="categoria" 
      className="form-control" 
      value={categoria}
      onChange={(e) =>setcategoria(e.target.value)} 
      placeholder="Add category"
      required />
    </div>
    <button onClick={(e) => handleSubmit(e)} className="btn btn-primary">Agregar</button>
  </form>
</div>
);
};

export default AddProduct;