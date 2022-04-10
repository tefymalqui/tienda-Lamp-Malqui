import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Inicio from './components/Inicio';
import Cart from './components/Cart';
import { CartProvider } from "./context/CartContext"
import Checkout from './components/Checkout';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/productos' element={<ItemListContainer inicio="Lamp" />} />
          <Route path='/Productos/:categoryId' element={<ItemListContainer inicio="Lamp" />} />
          <Route path='detalle/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </BrowserRouter>

    </CartProvider>
  );
}

export default App;
