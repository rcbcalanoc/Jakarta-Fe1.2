// Importing browser router, install it first --- npm i -D react-router-dom@latest
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Calanoc from "./components/members/calanoc/Calanoc";
import Page2 from "./components/members/delapena/Dela Pena";
import Page3 from "./components/members/magbanua/Magbanua";
import Page4 from "./components/members/seballos/Seballos";
import Page5 from "./components/members/sy/Sy";
import Vallesteros from "./components/members/vallesteros/Vallesteros";

import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* Importing the Nav component before nested routes */}
        <Nav />

        {/* Using the Routes and Route components from react-router-dom */}
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/Calanoc" element={<Calanoc />} />
            <Route path="/delapena" element={<Dela Pena />} />
            <Route path="/magbanua" element={<Magbanua />} />
            <Route path="/seballos" element={<Seballos />} />
            <Route path="/sy" element={<Sy />} />
            <Route path="/vallesteros" element={<Vallesteros />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
