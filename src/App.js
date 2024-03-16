
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './components/Login';
import DisplayPage from './pages/DisplayPage';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  return (
    <div className="bg-blend-darken bg-no-repeat bg-cover bg-black bg-opacity-75 bg-[url(https://i.pcmag.com/imagery/articles/041kvWBBQw85iAT5GLE7mm6-1.fit_lim.v1569490157.jpg)]">
      {/* BrowserRouter is for all web pahes */}
      <BrowserRouter>
        <Navbar />

        {/* Routes is for containing route  */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/display' element={<DisplayPage />} />
        </Routes>
        
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
