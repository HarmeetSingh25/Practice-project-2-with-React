// import axios from "axios";
import axios from "./Api/axiosconfig";
import { useEffect} from "react";
import { asynproduct } from "./Store/userAction";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(({counter}) => counter);
  console.log(data);


  useEffect(() => {
    dispatch(asynproduct());
  }, []);

  return <div>
{data.map(r=>console.log(r.name)
)}
  </div>;
};

export default App;
