import { useEffect } from "react";
import Nav from "./NavBar/Nav";
import MainRoutes from "./Routes/MainRoutes";
import { useDispatch, useSelector } from "react-redux";
import { currentlogin } from "./Store/Useractions/useraction";
import { asyncloadproducts } from "./Store/Useractions/CreateProductaAction";
// import { asynloadcardproduct } from "./Store/Useractions/Cartaction";
import AuthWrapper from "./Routes/AuthWrapper";

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(currentlogin())
    dispatch(asyncloadproducts())
    // dispatch(asynloadcardproduct());
  },[dispatch])
  // const reduxdata=useSelector((state)=>{console.log(state.user)})
  return <div className=" flex flex-col gap-5 bg-gray-900 text-white h-screen">
    <AuthWrapper/>
      <Nav/>
    <MainRoutes/>
  </div>;
};

export default App;
