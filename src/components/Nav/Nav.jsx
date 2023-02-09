import React from "react";
import { NavAll, NavDiv, NavImg, StyledLink } from "./Nav/NavStyles";

import { NavUl } from "../Generalstyles";
import SearchBar from "./SearchBar";


export default function Nav(props) {
    {
        console.log()
        return (
            <NavAll>
                <NavDiv>
                    <NavImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="" />
                    <NavUl>
                        <li>
                            <StyledLink to='/home'><p>Home</p>
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to='/about'> <p>About</p>
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink exact to='/' onClick={() =>(props.setAccess(0))}>
                                <p>Log out</p>
                            </StyledLink>
                        </li>
                    </NavUl>
                    <SearchBar onSearch={props.onSearch} random={props.random} />
                </NavDiv>
            </NavAll>
        )
    }
}