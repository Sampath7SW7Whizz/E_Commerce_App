import axios from "axios";

//these are actions
const ACTION_PREFIX="USER/";

const LOAD_USER=ACTION_PREFIX+"LOAD_USER";

const INIT_LOADING=ACTION_PREFIX+"INIT_LOADING";

const LOADING_DONE=ACTION_PREFIX+"LOADING_DONE";

const LOADING_ERROR=ACTION_PREFIX+"LOADING_ERROR";

const initialState={
    isloading:false,
    loadError:null,
    data:null
};

export const loadUser=()=>{
    return async(dispatch,getState)=>{
        const state=getState();
        console.log("user load called",{state});
        dispatch({type:INIT_LOADING});
        try{
            const res=await axios.get("https://fakestoreapi.com/users/1");
            dispatch({
                type:LOADING_DONE,
                payload:res.data
            })
        }catch(e){
              dispatch({
                type:LOADING_ERROR,
                pay:e
              })
        }
       return {
        type:LOAD_USER
       };
    };
    
};

export default function userReducer(state=initialState,action){
    switch (action.type) { 
      case INIT_LOADING:
        return{
            ...state,//copying the old state
            isloading:true,
            loadError:false,
            data:null
        };
    case LOADING_DONE:
        return{
          ...state,//copying the old state
          data:action.payload,
          isloading:false,

        };
    case LOADING_ERROR:
        return{
           ...state,
           isloading:false,
           loadError:action.payload,
        };
      default:
          return state;
    }
  }