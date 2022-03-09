
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { WomenCategoryPage } from './pages/women/category-women';
import { MenCategoryPage} from './pages/men/category-men';
import { ProductPage } from './pages/product-page/product-page';
import { PRODUCTS } from './data/products'

const womenCategoryProducts = PRODUCTS.women;
const menCategoryProducts = PRODUCTS.men;



function App() {


  return (
    <HashRouter>
      <div className="app" data-test-id='app'>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage products={PRODUCTS}/>} />
          <Route exact path="/women" element={<WomenCategoryPage  products={PRODUCTS}/>} />
          <Route exact path="/men" element={<MenCategoryPage products={PRODUCTS}/>} />
          <Route exact path="/women/:params" element={<ProductPage type="women" products={womenCategoryProducts}/>} />
          <Route exact path="/men/:params" element={<ProductPage type="men" products={menCategoryProducts}/>} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
