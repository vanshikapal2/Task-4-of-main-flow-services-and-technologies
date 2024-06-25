import React, { useState } from 'react';
import IntroScreen from './IntroScreen'; 
import TodoList from './TodoList'; 
import './App.css'; 

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleStart = () => {
    setShowIntro(false);
  };

  return (
    <div className="App">
      {showIntro ? (
        <IntroScreen onStart={handleStart} />
      ) : (
        <>
          <TodoList />
          <footer className="app-footer">
            <p>Developed by Vanshika</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;