import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import MyProf from "./Pages/MyProf/MyProf";
import Login from "./Pages/Login/Login";
import Corzinka from "./Components/Corzinka/Corzinka";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myprof" element={<MyProf />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/corzinka" element={<Corzinka />} />
      </Routes>
    </div>
  );
}

export default App;
