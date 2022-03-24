
import './App.css';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { WomenCategoryPage } from './pages/women/category-women';
import { MenCategoryPage } from './pages/men/category-men';
import { ProductPage } from './pages/product-page/product-page';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { ErrorData } from './components/error/error-component';
import { Loader } from './components/loader/loader';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS" });
  }, [dispatch])

  const dataProducts = useSelector(state => state.products);
  const errorMessage = useSelector(state => state.products.isError);
  const loadingProcess = useSelector(state => state.products.isLoading);
  const womenCategoryProducts = dataProducts.products.women;
  const menCategoryProducts = dataProducts.products.men;


  return (
    <HashRouter>
      <div className="app" data-test-id='app'>
        <Provider store={store}>
          <Header />
          {errorMessage && <ErrorData />}
          {loadingProcess && <Loader />}
          {!loadingProcess &&
            <Routes>
              <Route exact path="/" element={<MainPage products={dataProducts.products} />} />
              <Route exact path="/women" element={<WomenCategoryPage products={dataProducts.products} />} />
              <Route exact path="/men" element={<MenCategoryPage products={dataProducts.products} />} />
              <Route exact path="/women/:params" element={<ProductPage type="women" products={womenCategoryProducts} />} />
              <Route exact path="/men/:params" element={<ProductPage type="men" products={menCategoryProducts} />} />
            </Routes>
          }
          <Footer />
        </Provider>
      </div>
    </HashRouter>
  );
}

export default App;
