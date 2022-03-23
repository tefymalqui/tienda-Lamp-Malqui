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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={
            <section className='container'>
              <ItemListContainer inicio="Lamp" />
              <ItemDetailContainer />
            </section>
          } />
           <Route path='/Productos/:categoryId' element={
            <section className='container'>
              <ItemListContainer inicio="Lamp" />
              <ItemDetailContainer />
            </section>
          } />
        </Routes>
        <footer>

        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
