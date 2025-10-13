import Nav from "./NavBar/Nav";
import MainRoutes from "./Routes/MainRoutes";

const App = () => {
  return <div className=" flex flex-col gap-5 bg-gray-800 text-white h-screen">
      <Nav/>
    <MainRoutes/>
  </div>;
};

export default App;
