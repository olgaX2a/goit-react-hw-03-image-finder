import Loader from "react-loader-spinner";
import "./Loader.css";
const Spinner = () => {
  return (
    <Loader
      className="Loading"
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};
export default Spinner;
