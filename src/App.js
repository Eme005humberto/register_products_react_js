import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Table from './Table';
import AddProduct from './AddProduct';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <h3 className='text-center'>Lista de Productos</h3>
      <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={  <Table></Table>}></Route>
          <Route path='/add-product' element={<AddProduct></AddProduct>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
