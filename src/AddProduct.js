import React from "react";
import './style.css';

function AddProduct(){
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