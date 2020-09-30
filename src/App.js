import React from 'react';
import logo from './logo.svg';
import './App.css';
import BubbleMain from './components/BubbleMainComponent.js';
import SelectionMain from './components/SelectionMainComponent.js';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
  );
}

export default App;
