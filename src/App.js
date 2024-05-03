import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "animate.css/animate.css";
import "animate.css/source/animate.css";
import Navbar from "./components/navbar";
import AuthPage from "./pages/auth";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/homepage";
import TakeChallengePage from "./pages/takechallengepage";
import ProfilePage from "./pages/profilepage";
import { useAuth } from "./contexts/authcontext";


function App() {
  const { user,loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;  // Hiển thị nội dung tạm thời khi đang chờ đợi
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/take-challenge" element={<TakeChallengePage />} />
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
