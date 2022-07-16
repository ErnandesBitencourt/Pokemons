import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage } from '../routes/Coordinator'


const Main = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
justify-items: center;
background-color: #ffff;
`

const ContainerOne = styled.div`
border: 1px solid black;
padding: 40px 40px 40px 40px;
background-color: #ffff;
`

const Button = styled.button`
padding: 10px 10px 10px 10px;
  margin-bottom: 10px;
  background-color:#191970;
  border: 1px solid black;
  color:white;
  border-radius: 5px;
  &:hover {
    background-color: #FFD700;
    color:black;
  }
`

const Body = styled.div`

height: 100vh;
width: 100vw;
background-color: #ffff;
margin-top: 50px;

img{
    height: 150px;

}
`

export const DetailsCard = (props) => {
    const navigate = useNavigate()

    return <Body>
    
    <Main>
        <div>
            <ContainerOne>
                <img src={props.pokemon.sprites.front_default} />
            </ContainerOne>
            <br />
            <ContainerOne>
                <img src={props.pokemon.sprites.back_default} />
            </ContainerOne>
        </div>
        <ContainerOne>
            <h3>Stats</h3>
            <p><b>{props.pokemon.stats[0].stat.name}: </b>{props.pokemon.stats[0].base_stat}</p>
            <p><b>{props.pokemon.stats[1].stat.name}: </b>{props.pokemon.stats[1].base_stat}</p>
            <p><b>{props.pokemon.stats[2].stat.name}: </b>{props.pokemon.stats[2].base_stat}</p>
            <p><b>{props.pokemon.stats[3].stat.name}: </b>{props.pokemon.stats[3].base_stat}</p>
            <p><b>{props.pokemon.stats[4].stat.name}: </b>{props.pokemon.stats[4].base_stat}</p>
            <p><b>{props.pokemon.stats[5].stat.name}: </b>{props.pokemon.stats[5].base_stat}</p>
        </ContainerOne>
        <div>
            <ContainerOne>
                <p><b>Type: </b>{props.pokemon.types[0].type.name}</p>
            </ContainerOne>
            <br />
            <ContainerOne>
                <p><b>Moves: </b></p>
                <p>{props.pokemon.moves[0].move.name}</p>
                <p>{props.pokemon.moves[1].move.name}</p>
                <p>{props.pokemon.moves[2].move.name}</p>
            </ContainerOne>
        </div>
    </Main>

    </Body>
}