import './App.css';
import Menu from './components/Menu/Menu.js'
import Header from './components/Header/Header.js'
import Produtos from './components/Produtos/Produtos';




function App() {

  const name = 'Camilly';

  return (
    <div className="App">
      <Menu />
      <Header />
      <Produtos />
    </div>
  );
}

export default App;
