
import './App.css';
// import { Link, HashRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { Header } from './components/header';
import { Footer } from './components/footer';




function App() {
  return (
    <div className="app" data-test-id='app'>
      <Router>
        <Header />
        <MainPage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
