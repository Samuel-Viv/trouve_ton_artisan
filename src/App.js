import React from "react";
import {Routes, Route} from "react-router-dom";

import Header from "./asset/component/Header";
import Home from "./asset/page/Home";
import Batiment from './asset/page/Batiment';
function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Batiment" element={<Batiment/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
