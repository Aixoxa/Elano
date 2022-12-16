import "./App.css";
import Home from "./Components/HOME/Home";
import Start from "./Components/STARTED/Start";
import Signup from "./Components/SIGNUP/Signup";
import Chat from "./Components/CHAT/Chat";
import Login from "./Components/LOGIN/Login";
import Welcome from "./Components/WELCOME/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
