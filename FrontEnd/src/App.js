import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimationRoutes from './components/TransitionAnimation/AnimationRoutes';
import React from 'react'

function App() {

  return (
    <div className='App'>
       <Router>
        <AnimationRoutes />
      </Router>
    </div>

  );
}

export default App;
