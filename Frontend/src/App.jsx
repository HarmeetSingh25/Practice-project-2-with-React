import { useEffect } from "react";
import Nav from "./NavBar/Nav";
import MainRoutes from "./Routes/MainRoutes";
import { useDispatch, useSelector } from "react-redux";
import { currentlogin } from "./Store/Useractions/useraction";
import { asyncloadproducts } from "./Store/Useractions/CreateProductaAction";

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(currentlogin())
    dispatch(asyncloadproducts())
  },[])
  // const reduxdata=useSelector((state)=>{console.log(state.user)})
  return <div className=" flex flex-col gap-5 bg-gray-800 text-white h-screen">
      <Nav/>
    <MainRoutes/>
  </div>;
};

export default App;
