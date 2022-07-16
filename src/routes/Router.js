import React from "react";
import HomePage from "../pages/HomePage/HomePage"
import PokedexPage from "../pages/PokedexPage/PokedexPage"
import PokemonDetailsPage from "../pages/PokemonDetailsPage/PokemonDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
          <Routes>
              <Route index element = {<HomePage />} />
              <Route path = 'Pokedex' element = {<PokedexPage />} />
              <Route path = 'PokemonDetails' element = {<PokemonDetailsPage />}/>
          </Routes>
        </BrowserRouter>
    )
}

export default Router
