import { toast } from "react-toastify";
import axios from "../../Api/axiosconfig";
import { loaduser } from "../Slices/userslice";

// Load user from localStorage on app start
export const currentlogin = () => (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loaduser(user));
    } else {
      toast.error("User not found");
    }
  } catch (error) {
    toast.error(error.message);
  }
};

// Logout
export const asynclogout = () => (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(loaduser(null));
    toast.success("Logged out");
  } catch (error) {
    toast.error(error.message);
  }
};

// Login
export const loginaction = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );

    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(loaduser(data[0]));
      toast.success("Login successful");
    } else {
      toast.error("Invalid credentials");
    }
  } catch (error) {
    toast.error(error.message);
  }
};

// Register
export const registeraction = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post("/users", user);
    dispatch(loaduser(data));
    localStorage.setItem("user", JSON.stringify(data));
    toast.success("User registered successfully");
  } catch (error) {
    toast.error(error.message);
  }
};

// ✅ Add product to user's cart
export const asynsaveproduct = (product, id) => async (dispatch) => {
  try {
    // 1. Get user
    const { data: user } = await axios.get(`/users/${id}`);

    // 2. Update user with new cart
    const updatedUser = {
      ...user,
      cart: [...(user.cart || []), { ...product, quantity: 1 }],
    };

    // 3. Save to backend
    await axios.put(`/users/${id}`, updatedUser);

    // 4. Update redux + localStorage (directly here, not via another action)
    dispatch(loaduser(updatedUser));
    localStorage.setItem("user", JSON.stringify(updatedUser));

    toast.success("Product added to cart");
  } catch (error) {
    console.log(error);
    toast.error("Failed to add to cart");
  }
};

// ✅ Remove product from cart
export const asyncremoveFromCart = (productId, userId) => async (dispatch) => {
  try {
    const { data: user } = await axios.get(`/users/${userId}`);

    const updatedUser = {
      ...user,
      cart: user.cart.filter((item) => String(item.id) !== String(productId)),
    };

    await axios.put(`/users/${userId}`, updatedUser);

    // update redux + localStorage
    dispatch(loaduser(updatedUser));
    localStorage.setItem("user", JSON.stringify(updatedUser));

    toast.success("Item removed from cart");
  } catch (error) {
    console.log(error);
    toast.error("Failed to remove item");
  }
};


// ✅ Clear cart
export const asynclearCart = (userId) => async (dispatch) => {
  try {
    const { data: user } = await axios.get(`/users/${userId}`);

    const updatedUser = { ...user, cart: [] };

    await axios.put(`/users/${userId}`, updatedUser);

    dispatch(loaduser(updatedUser));
    localStorage.setItem("user", JSON.stringify(updatedUser));

    toast.success("Cart cleared");
  } catch (error) {
    console.log(error);
    toast.error("Failed to clear cart");
  }
};
