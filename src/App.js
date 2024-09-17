import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Emission from './Emission';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

// import Products from './Pages/Products';
 
 const App = () => {
   return (
      <>
      <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Emission" element={<Emission />} />
            
         </Routes>
         {/* <Navbar />
   
         <Home/>  */}
      </>
   );
};

export default App;
 
