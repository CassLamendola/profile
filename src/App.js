import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import References from './Components/References';

function App() {
  const [selected, setSelected] = useState('home');
  const [mounted, setMounted] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  function renderContent() {
    
    switch(selected) {
      case 'home':
        return <Home mounted={mounted} setMounted={setMounted}/>
      case 'about':
        return <About mounted={mounted} setMounted={setMounted}/>
      case 'projects':
        return <Projects mounted={mounted} setMounted={setMounted}/>
      case 'references':
        return <References mounted={mounted} setMounted={setMounted}/>
      default:
        return <Home mounted={mounted} setMounted={setMounted}/>
    }
  }

  return (
    <div className="App">
      <Nav 
        selected={selected} 
        setSelected={setSelected} 
        transitioning={transitioning} 
        setTransitioning={setTransitioning} 
        setMounted={setMounted}
      />
      {renderContent()}
    </div>
  );
}

export default App;
