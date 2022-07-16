import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from "./Styled";
import {goToPokedexPage} from "../../routes/Coordinator"
 

    const Header = ({ leftButtonFunction, title, showRightButton }) => {

        const navigate = useNavigate()
      
        const leftButtonTitle = () => {
          switch (title) {
            case "Pokémons":
              return "Ir para Pokémons";
            case " Lista de Pokémos Adicionados":
              return "Inicio";
            default:
              return "Voltar";
          }
        };
      
        return (
          <HeaderContainer>

            <LeftHeaderButton onClick={leftButtonFunction}>
              {leftButtonTitle()} 
            </LeftHeaderButton>

            <h1>{title}</h1>

            {showRightButton && (
              <RightHeaderButton onClick={() => goToPokedexPage(navigate)}>
               Ir para Pokémons
              </RightHeaderButton>
            )}
          </HeaderContainer>
        );
      };
      
      export default Header;