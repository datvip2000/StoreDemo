import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navigation/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import ShopContextProvider from './components/ShopContextProvider/ShopContextProvider';
import { useState,useEffect } from 'react';
import PopupView from './components/Popup/PopupView/PoupView';

function App() {
    const [showView,setShowView] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(() => {
          setShowView(true)
         return () => clearTimeout(timer); 
        }, 3000);
    },[])

    return (
      <div className="App">
        <PopupView trigger={showView} setTrigger ={setShowView}/>
        <ShopContextProvider>
          <Router>
            <Navbar>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Navbar>
          </Router>
        </ShopContextProvider>
      </div>
    );
  }
  
  export default App;