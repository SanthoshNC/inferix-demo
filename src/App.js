import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="App">
      <Header />
      <button onClick={handleClick}>Toggle Text</button>
      {isTextVisible && <p>This is the toggled text!</p>}
      <Footer />
    </div>
  );
}

export default App;