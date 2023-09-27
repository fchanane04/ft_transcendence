import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Friends from "./Friends";
import Home from "./Home";
import Chat from "./Chat";
import Game from "./Game";
import Profile from "./Profile";

function OnLineContent() {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/game" element={<Game />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default OnLineContent;
