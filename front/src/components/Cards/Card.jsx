import { DefaultButton, Invisiblebtn } from "../Generalstyles";
import { DivCard, ImgCard } from "./CardsStyles";
import { Link } from "react-router-dom";
import { StyledLink } from "../Nav/Nav/NavStyles";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from 'react-redux';



function Card(props) {
   console.log(props.myFavorites)
   const [ isFav, setIsFav ] = useState(false)
   const handleFavorite = () =>{
      if(!isFav){
         setIsFav(true)
         props.isFavOn(props)

      }else{
         setIsFav(false)
         props.isFavOff(props.id)
      }
      
   }
   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {

            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
   
   return (
      <DivCard>
         <DefaultButton onClick={props.onClose}>X</DefaultButton>
         {
            isFav ? (
               <Invisiblebtn onClick={handleFavorite}>❤️</Invisiblebtn>
            ) : (
               <Invisiblebtn onClick={handleFavorite}>🤍</Invisiblebtn>
            )
         }
         <StyledLink to={`/detail/${props.id}`} >
            <h2>{props.name}</h2>
            <ImgCard src={props.image} alt="" />
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </StyledLink>
      </DivCard>
   );
}




export const mapDispatchToProps = (dispatch) =>{
   return{
      isFavOn: (char) => {dispatch(addFavorite(char))},
      isFavOff: (id) => {dispatch(deleteFavorite(id))}
   }
};
export const mapStateToProps = (state) => {
      let myFavorites = []
      if(state && state.myFavorites){
         myFavorites = state.myFavorites
      }
   return {
     myFavorites: myFavorites
   };
 };

export default connect(mapStateToProps, mapDispatchToProps)(Card)


