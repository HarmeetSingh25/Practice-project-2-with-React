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

export const asynsaveproduct = (updatedUser, id) => async (dispatch) => {
  try {
    // 🟢 PUT updated user to backend
    await axios.put(`/users/${id}`, updatedUser);

    // 🟢 Update redux + localStorage
    dispatch(loaduser(updatedUser));
    localStorage.setItem("user", JSON.stringify(updatedUser));

    console.log("✅ Cart saved to backend:", updatedUser.cart);
  } catch (error) {
    console.error("❌ Failed to save cart:", error);
    toast.error("Failed to update cart");
  }
};



// ✅ Remove product from cart
export const asyncremoveFromCart = (productId, userId) => async (dispatch) => {
  try {
    console.log("Removing product:", productId);

    // 1️⃣ Get the latest user data from the server
    const { data: user } = await axios.get(`/users/${userId}`);

    // 2️⃣ Check cart and update quantity or remove
    const updatedCart = user.cart
      .map((item) => {
        // Find the product we want to remove or decrease
        if (String(item.productId) === String(productId)) {
          // If quantity > 1, reduce it by 1
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          // If quantity is 1, return null (to remove it)
          return null;
        }
        return item; // all other products stay same
      })
      .filter(Boolean); // removes null entries (items we deleted)

    // 3️⃣ Build updated user data
    const updatedUser = { ...user, cart: updatedCart };

    // 4️⃣ Save it to the server
    await axios.put(`/users/${userId}`, updatedUser);

    // 5️⃣ Update Redux + localStorage
    dispatch(loaduser(updatedUser));
    localStorage.setItem("user", JSON.stringify(updatedUser));

    // 6️⃣ Show success toast
    toast.success("🛒 Item updated in cart");
  } catch (error) {
    console.error("Remove error:", error);
    toast.error("❌ Failed to update cart");
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

export const asyncedituserinfo = (info, id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.put(`/users/${id}`, info)
    console.log(data);
    dispatch(loaduser(data))
    localStorage.setItem("user", JSON.stringify(data))
  } catch (error) {
    console.log(error);

  }
};
export const asynupdatepassword = (datas, id) => async (dispatch) => {
  try {

    const { data } = await axios.patch(`/users/${id}`, {
      password: datas.password,
      confirmpasword: datas.confirmpasword,
    });
    dispatch(loaduser(data))
  } catch (error) {
    console.log(error);

  }

}
