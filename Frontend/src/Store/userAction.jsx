// import axios from "axios";
import axios from "../Api/axiosconfig";
import { loadUser } from "./userSlice";
export const asynproduct = ()=> async (dispatch,getState) => {
    
    try {
        console.log(getState());
        const res = await axios.get("/users")
       dispatch(loadUser(res.data))
    // console.log(res);
    
        
    } catch (error) {
        console.log(error);
        
    }
};
