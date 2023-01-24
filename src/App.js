import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import MyProf from "./Pages/MyProf/MyProf";
import Login from "./Pages/Login/Login";
import Corzinka from "./Components/Corzinka/Corzinka";
import Private from "./Routes/Private";
import Public from "./Routes/Public";

function App({link}) {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Private link={link} />}>
          <Route path="/" element={<Home link={link} />} />
          <Route path="/myprof" element={<MyProf link={link} />} />
          <Route path="/corzinka" element={<Corzinka link={link} />} />

          <Route path="/*" element={<NotFound link={link} />} />
        </Route>

        <Route path="/" element={<Public link={link} />}>
          <Route path="/login" element={<Login link={link} />} />
        </Route>
    </Routes>
    </div>
  );
}

export default App;
