import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "react-scroll-to-top";
import './css/App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

import STT from './components/ScrollToTop';  //ScrollToTop

function App() {
  return (

    <HashRouter>
      <div className="App">

        <Header />
          <STT>
          <Routes>
            
            <Route path='/' exact element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact/>} />

          </Routes>
          </STT>
        <Footer />
        <ScrollToTop smooth top color="red"/>

      </div>

    </HashRouter>

  );
}

export default App;
