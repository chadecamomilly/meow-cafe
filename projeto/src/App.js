import './App.css';
import Menu from './components/Menu/Menu.js'
import Header from './components/Header/Header.js'
import Produtos from './components/Produtos/Produtos';
import ProdutoDestaque from './components/ProdutoDestaque/ProdutoDestaque';
import Delivery from './components/Delivery/Delivery';
import Sobre from './components/Sobre/Sobre';
import Infos from './components/Infos/Infos';
import Footer from './components/Footer/Footer';





function App() {
  return (
    <div className="container">
      <Menu />
      <Header />
      <Produtos />
      <ProdutoDestaque />
      <Delivery />
      <Sobre />
      <Infos />
      <Footer />
    </div>
  );
}

export default App;
