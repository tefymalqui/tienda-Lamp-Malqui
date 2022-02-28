import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer inicio="Lamp"/>
      </main>
    </div>
  );
}

export default App;
