// Importing browser router, install it first --- npm i -D react-router-dom@latest
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Calanoc from "./components/members/calanoc/Calanoc";
import DelaPena from "./components/members/delapena/DelaPena";
import Seballos from "./components/members/seballos/Seballos";
import Magbanua from "./components/members/magbanua/Magbanua";
import Page5 from "./components/members/surname5/Page5";
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
            <Route path="/calanoc" element={<Calanoc />} />
            <Route path="/delapena" element={<DelaPena />} />
            <Route path="/seballos" element={<Seballos />} />
            <Route path="/magbanua" element={<Magbanua />} />
            <Route path="/surname5" element={<Page5 />} />
            <Route path="/vallesteros" element={<Vallesteros />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
