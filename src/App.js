
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { CategoryPage } from './pages/categories/category-page';




function App() {
  return (

    <HashRouter>
      <div className="app" data-test-id='app'>
        <Header />      
         <Routes>
        <Route exact path="/" element={<MainPage />} />
          <Route exact path="/category" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
