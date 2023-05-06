import logo from './logo.svg';
import './App.css';
import Header from './MyWebsite/Header';
import Products from './MyWebsite/Products';
// import img1 from './images/pic.jpg';
import About from './MyWebsite/About';
import Buy from './MyWebsite/Buy';
import Contact from './MyWebsite/Contact';
import Footer from './MyWebsite/Footer';
import Try from './MyWebsite/Try';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';




function App() {
  return (
    <>
    <BrowserRouter>
    
    {/* <Header title="SK-TECHNOLOGY" about="About Us"/> */}
    {/* <Header title="SK-TECHNOLOGY"/> //title yaha se le rha aur about le rha default se Header ke andar */}
    <Header title="TechVillage"/> {/* title yaha se le rha aur about le rha default se Header ke andar */}
    
    {/* <img src="./images/pic.jpg" alt="" /> */}
    
      <Routes>
          <Route path="/buy" element={<Buy/>} />
          
          < Route path="/" element= {<Products/>} /> 
      </Routes>
          
    
    

    <Try/>
    <About/>
    
    <Contact/>
    {/* <Footer/> */}
    </BrowserRouter>

    </>
  );
}

export default App;
