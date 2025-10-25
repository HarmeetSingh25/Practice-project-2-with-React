// import axios from "../../Api/axiosconfig";
// import { addToCart, clearCart, removeFromCart } from "../Slices/cartslice";

// // Load cart for a user
// export const asynloadcardproduct = (userId) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/users/${userId}`); // fetch the user
//     const cartItems = data.cart || [];

//     // clear redux and add all items
//     dispatch(clearCart());
//     cartItems.forEach((item) => {
//       dispatch(addToCart(item));
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Save product to user's cart
// export const asynsaveproduct = (product, userId) => async (dispatch) => {
//   try {
//     // 1. Get user
//     const { data: user } = await axios.get(`/users/${userId}`);

//     // 2. Update user with new cart
//     const updatedUser = {
//       ...user,
//       cart: [...(user.cart || []), { ...product, quantity: 1 }],
//     };

//     // 3. Save to backend
//     await axios.put(`/users/${userId}`, updatedUser);

//     // 4. Reload into redux
//     dispatch(asynloadcardproduct(userId));
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Remove product from user's cart
// export const asyncremoveFromCart = (productId, userId) => async (dispatch) => {
//   try {
//     // 1. Get user
//     const { data: user } = await axios.get(`/users/${userId}`);

//     // 2. Filter out the product
//     const updatedUser = {
//       ...user,
//       cart: user.cart.filter((item) => String(item.id) !== String(productId)),
//     };

//     // 3. Save back to backend
//     await axios.put(`/users/${userId}`, updatedUser);

//     // 4. Update redux
//     dispatch(removeFromCart(productId));
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Clear cart for a user
// export const asynclearCart = (userId) => async (dispatch) => {
//   try {
//     // 1. Get user
//     const { data: user } = await axios.get(`/users/${userId}`);

//     // 2. Empty cart
//     const updatedUser = {
//       ...user,
//       cart: [],
//     };

//     // 3. Save back to backend
//     await axios.put(`/users/${userId}`, updatedUser);

//     // 4. Clear redux
//     dispatch(clearCart());
//   } catch (error) {
//     console.log(error);
//   }
// };
