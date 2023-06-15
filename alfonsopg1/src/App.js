import { NavBar } from "./Components/NavBar";
import { Beneficts } from "./Screens/Beneficts";
import Contact from "./Screens/Contact";
import { Home } from "./Screens/Home";
import { Services } from "./Screens/Services";
import { WhoWeAre } from "./Screens/WhoWeAre";


function App() {
  return (
    <div className="App">
      <NavBar/>
     <Home/>
     <Services/>
     <Beneficts/>
     <Contact/>
     <WhoWeAre/>
    </div>
  );
}

export default App;
