import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from "react";
import "./bootstrap.css";
import "./Style.css";


//Home Page
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Home/Home";



// Pages
import Iphone from "./Components/Pages/Iphone/iphone";
import Mac from "./Components/Pages/Mac/Mac";
import Ipad from "./Components/Pages/Ipad/Ipad";
import Music from "./Components/Pages/Music/Music";
import Cart from "./Components/Pages/Cart/Cart";
import Support from "./Components/Pages/Support/Support";
import TV from "./Components/Pages/TV/TV";
import Watch from "./Components/Pages/Watch/Watch";
import Four04 from "./Components/Pages/Four04/Four04";
import Productpage from "./Components/Pages/Productpage/Productpage";
import SharedLayout from './Components/Pages/SharedLayout';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/music" element={<Music />} />
          <Route path="/productpage" element={<Productpage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
