import axios from "../../Api/axiosconfig";
import { addToCart } from "../Slices/cartslice";

export const asynloadcardproduct = () => async (dispatch, getstate) => {
  try {
    const {data} = await axios.get("/cart");
    dispatch(addToCart(data));
  } catch (error) {
    console.log(error);
  }
};
export const asynsaveproduct = (product) => async (dispatch, getstate) => {
  try {
    await axios.post("/cart", product);
    dispatch(asynloadcardproduct());
  } catch (error) {
    console.log(error);
  }
};
