// import { useEffect, useState } from 'react';
// import './App.scss';
import { Header } from './components/Layout/Header';

function App() {
// const [bckgroundClass, setBckgroudClass] = useState('container');

// useEffect(()=>{
//   setBckgroudClass('container_bg')
// }, [])
  return (
    <div className="container">
      <Header/>
    </div>
  );
}

export default App;
