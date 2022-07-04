import React from "react";
import Home from "./Home";
import Info from "./Info";
import Error from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="movie/:id" element= { <Info />} />
        <Route path="*" element= { <Error /> } />
      </Routes>
    </BrowserRouter>
  </>
};

export default App;