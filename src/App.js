import React from "react";
import {Routes, Route} from "react-router-dom";
// pages
import Header from "./asset/component/Header";
import Home from "./asset/page/Home";
import Batiment from './asset/page/Batiment';
import Services from './asset/page/Service';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Batiment" element={<Batiment/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
