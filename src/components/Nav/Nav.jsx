import React from "react";
import { NavDiv, NavImg } from "./Nav/NavStyles";
import SearchBar from "./SearchBar";

export default function Nav (props) {                                                                                                                                                                                         {
        return(
            <NavDiv>
                <NavImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="" />

                <SearchBar onSearch={props.onSearch} random={props.random}/>
            </NavDiv>
        )
    }
}