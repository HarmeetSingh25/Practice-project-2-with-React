import { toast } from "react-toastify";
import axios from "../../Api/axiosconfig";
import { loadproduct } from "../Slices/productslice";
// import { loaduser } from "../Slices/userslice";

export const asyncloadproducts = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/products");
    // console.log(data);

    dispatch(loadproduct(data));
  } catch (error) {
    console.log(error);
  }
};

export const asynCreateproduct = (product) => async (dispatch, getstate) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncloadproducts());
  } catch (error) {
    toast.error(error);
  }
};
