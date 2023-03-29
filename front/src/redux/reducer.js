import MyFavorites from "../components/MyFavorites/MyFavorites";
import { ADD_FAVORITE, DELETE_FAVORITE, GET_FAVALL } from "./actions";

const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case DELETE_FAVORITE:
            const filter = state.myFavorites.filter(char => char.id !== action.payload);
            return{
                myFavorites: filter
            }
        case GET_FAVALL:
            return{
            ...state,
            MyFavorites: [...state.myFavorites, action.payload]
        }
    }

};

export default rootReducer;