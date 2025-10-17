import { toast } from "react-toastify";
import axios from "../../Api/axiosconfig";
import { loaduser } from "../Slices/userslice";

export const currentlogin = () => (dispatch, getstate) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
    else toast.error("User not found");
  } catch (error) {
    toast.error(error);
  }
};

export const logoutaction = () => (dispatch, getstate) => {
  try {
    localStorage.setItem("user", "");
  } catch (error) {
    toast.error(error);
  }
};

export const loginaction =  (user) => async(dispatch, getstate) => {
    console.log(user);
    
  try {
    const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`);
    // console.log(data);
    
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    toast.error(error);
  }
};

export const registeraction = (user) => async (dispatch, getstate) => {
// console.log(getstate().user);

  
  try {
    const {data} = await axios.post("/users", user);
    dispatch(loaduser(data));
  } catch (error) {
    toast.error(error);
  }
};
