// import axios from "axios";
import axios from "./Api/axiosconfig";
import { useEffect} from "react";
import { asynproduct } from "./Store/userAction";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dataa = useSelector(({counter}) => counter);
  console.log(dataa);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynproduct());
  }, []);

  return <div>App</div>;
};

export default App;
