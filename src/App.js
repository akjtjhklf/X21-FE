import "./App.css";
import ChooseAnswer from "./components/gamemode/chooseanswer";
import HangingMan from "./components/gamemode/hangingman";

function App() {
  return (
    <div className="App">
      {/* <ChooseAnswer /> */}
      <HangingMan />
    </div>
  );
}

export default App;
