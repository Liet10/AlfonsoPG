import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "./Components/NavBar";
import { Beneficts } from "./Screens/Beneficts";
// import Contact from "./Screens/Contact";
import { Home } from "./Screens/Home";
import { Services } from "./Screens/Services";
import { WhoWeAre } from "./Screens/WhoWeAre";



function App() {
  return (
    <div className="App">
     <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/servicios" component={Services} />
        <Route path="/porque-nosotros" component={Beneficts} />
        <Route path="/quienes-somos" component={WhoWeAre} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
