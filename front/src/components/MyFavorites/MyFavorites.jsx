import React from "react";
import Card from "../Cards/Card";
import { connect } from "react-redux";
import { CardDiv, ModalDiv } from '../Generalstyles';
import { getFavorite } from "../../redux/actions";

export function Favorites(props) {
    console.log([props])
    if(props.myFavorites.length === 0){
        getFavorite()
    }
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
export const mapStateToProps = (state) => {
    let myFavorites = []
    if(state && state.myFavorites){
       myFavorites = state.myFavorites
    }
 return {
   myFavorites: myFavorites
 };
};
export const mapDispatchToProps = (dispatch) =>{
   return{
    getFavs: () => {dispatch(getFavorite())}
   }
};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);