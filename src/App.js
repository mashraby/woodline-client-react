import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import MyProf from "./Pages/MyProf/MyProf";
import Login from "./Pages/Login/Login";
import Corzinka from "./Components/Corzinka/Corzinka";
import Private from "./Routes/Private";
import Public from "./Routes/Public";


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Private />}>
          <Route path="/" element={<Home />} />
          <Route path="/myprof" element={<MyProf />} />
        <Route path="/corzinka" element={<Corzinka />} />

          <Route path="/*" element={<NotFound />} />
        </Route>

        <Route path="/" element={<Public />}>
          <Route path="/login" element={<Login />} />
        </Route>
    </Routes>s
      
    </div>
  );
}

export default App;
