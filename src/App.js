import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/headers/Header';
import Movies from './components/pagesfolder/Movies';
import Home from './components/pagesfolder/Home';
import Pages from './components/pagesfolder/Pages';
import Serice from './components/pagesfolder/Serice';
import Details from './components/pagesfolder/Details';
import Cardhome from './components/pagesfolder/Cardhome';
import Footer from './components/Footer/Footer';

import Signup from './components/pagesfolder/Signup';
import Signin from './components/pagesfolder/Signin';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/serice" element={<Serice />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/pages" element={<Pages />} />
        <Route exact path="/" element={<Cardhome />} />
        <Route path="/details/:index" element={<Details />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
