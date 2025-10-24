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
    dispatch(loaduser(null)); // clear redux too
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
      localStorage.setItem("user", JSON.stringify(data[0])); // store one user
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
    localStorage.setItem("user", JSON.stringify(data)); // auto-login after register
    toast.success("User registered successfully");
  } catch (error) {
    toast.error(error.message);
  }
};
