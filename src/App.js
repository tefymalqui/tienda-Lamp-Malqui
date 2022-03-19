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
      <main>
        <ItemListContainer inicio="Lamp"/>
        <ItemDetailContainer/>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
