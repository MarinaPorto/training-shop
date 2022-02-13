
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { WomenCategoryPage } from './pages/women/category-women';
import { MenCategoryPage} from './pages/men/category-men';
import { ProductPage } from './pages/product-page/product-page';



function App() {
  return (
    <HashRouter>
      <div className="app" data-test-id='app'>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/women" element={<WomenCategoryPage />} />
          <Route exact path="/men" element={<MenCategoryPage />} />
          <Route exact path="/women/wmpcc02" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
