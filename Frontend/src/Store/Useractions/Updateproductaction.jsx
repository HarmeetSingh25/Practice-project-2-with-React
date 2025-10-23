import axios from "../../Api/axiosconfig";
import { loadproduct } from "../Slices/productslice";

// Load all products
export const asyncloadproducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data));
    console.log("Loaded products:", data);
  } catch (error) {
    console.error("Error loading products:", error);
  }
};

// Update a product
export const asyncUpdateProduct = (product) => async (dispatch) => {
  try {
    // Use PUT or PATCH instead of POST
    await axios.put(`/products/${product.id}`, product);

    // Reload products after update
    dispatch(asyncloadproducts());
  } catch (error) {
    console.error("Error updating product:", error);
  }
};
