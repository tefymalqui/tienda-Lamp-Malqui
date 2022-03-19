import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <section className='container'>
        <ItemListContainer inicio="Lamp"/>
        <ItemDetailContainer/>
      </section>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
