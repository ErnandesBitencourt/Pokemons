import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom'

import { goToPokedexPage, goToPokemonDetailsPage } from '../../routes/Coordinator'
import styled from "styled-components";
import axios from "axios";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import PokeCard from "../../components/PokeCard";
import Header from "../../components/Header/Header"



const Main = styled.div`
display: flex;
flex-wrap: wrap;
width:100%;
height: auto;
align-items: center;
justify-items: center;
`

const Body = styled.div`
width:100%;
background-color: #ffff;
display: flex;
flex-direction: column;
align-items:center;
border: solid 1px red;

`




const HomePage = () =>{
    const navigate = useNavigate()


    const [detailsPokemon] = useContext(GlobalStateContext)

 

    const Pokemons = detailsPokemon && detailsPokemon.map((pokemon) => {

        if (pokemon.thePokedex === false) {
            return (
                <PokeCard name={pokemon.name} 
                photo={pokemon.sprites.front_default} 
                thePokedex={pokemon.isPokedex} 
                button={"add"} />
            )
        }

    })

    return (
        <Body>

            <Header title={"Pokémons"}
                leftButtonFunction={() => goToPokedexPage(navigate)}/>
            
            <Main>
                {Pokemons}
            </Main>
        </Body>
    )
}

export default HomePage;