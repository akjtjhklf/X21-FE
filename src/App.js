import { Route, Routes } from "react-router-dom";
import "./App.css";

import TakeChallenge from "./components/takechallenge";
import TakeSubjects from "./components/takesubject";
import SubjectListPage from "./pages/subjectlistpage";
import TakeChallengePage from "./pages/takechallengepage";
import GameResult from "./components/gameresult";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>trang chu</h1>} />
        <Route path="/login" element={<h1>dang nhap</h1>} />
        <Route path="/register" element={<h1>dang ky</h1>} />
        <Route path="/subjects" element={<SubjectListPage />} />
        <Route path="/take-challenge" element={<TakeChallengePage />} />
      </Routes>
    </div>
  );
}

export default App;
