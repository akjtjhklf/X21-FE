import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import ChooseAnswer from "./components/gamemode/chooseanswer";
import HangingMan from "./components/gamemode/hangingman";
import SignUp from "./components/auth/signup";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      {/* <ChooseAnswer /> */}
      <Navbar/>
      <SignUp/>
      {/* <HangingMan /> */}
    </div>
  );
}

export default App;
