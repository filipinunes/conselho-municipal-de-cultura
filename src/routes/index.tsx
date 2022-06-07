import * as React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../modules/home";
import Teste from "../modules/teste";

const Rotas = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Teste" element={<Teste />} />
            </Routes>
       </BrowserRouter>
   )
}

export default Rotas;