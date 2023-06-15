import './App.css';
import { NavBar } from './components/NavBar';
import { Beneficts } from './screens/Beneficts';
import { Contacts } from './screens/Contacts';
import { Home } from './screens/Home';
import { Services } from './screens/Services';
import { WhoWeAre } from './screens/WhoWeAre';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Home/>
      <Services/>
      <Beneficts/>
      <WhoWeAre/>
      <Contacts/>
    </div>
  );
}

export default App;
