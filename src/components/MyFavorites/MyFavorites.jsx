import React from "react";
import Card from "../Cards/Card";
import { connect } from "react-redux";
import { CardDiv, ModalDiv } from '../Generalstyles';

export function Favorites(props) {
    if(props.myFavorites.length == 0){
        return(
            <ModalDiv>
            <h1>Agrega un favorito</h1>
            </ModalDiv>
        )
    }else{
    return (
        <CardDiv>
            {props.myFavorites?.map((e, i) => (
                <Card
                    id={e.id}
                    name={e.name}
                    species={e.species}
                    gender={e.gender}
                    image={e.image}
                    fav={true}
                    key={i++}
                />
            ))}
        </CardDiv>
    );}
}
export const mapStateToProps = (state) => {
    let myFavorites = []
    if(state && state.myFavorites){
       myFavorites = state.myFavorites
    }
 return {
   myFavorites: myFavorites
 };
};

export default connect(mapStateToProps, null)(Favorites);