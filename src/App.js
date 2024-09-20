import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Table from './Table';
import AddProduct from './AddProduct';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Header></Header>
      <AddProduct></AddProduct>
      <h3 className='text-center'>Lista de Productos</h3>
      <Table></Table>
    </div>
  );
}

export default App;
