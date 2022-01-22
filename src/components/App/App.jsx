import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Question1 from "../Question1/Question1";
import Question2 from "../Question2/Question2";
import Question3 from "../Question3/Question3";
import Question4 from "../Question4/Question4";
import Review from "../Review/Review";
import Success from "../Success/Success";

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <nav>
            <Link to="/">Home</Link>  | 
            <Link to="/Question1"> Question 1</Link>  | 
            <Link to="/Question2"> Question 2</Link>  | 
            <Link to="/Question3"> Question 3</Link>  | 
            <Link to="/Question4"> Question 4</Link>  |  
            <Link to="/Review"> Review </Link>  |
            <Link to="/Success"> Success </Link>  |
          </nav>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
       
          <Route path="/Question1" exact>
            <Question1 />
          </Route>

          <Route path="/Question2" exact>
            <Question2 />
          </Route>

          <Route path="/Question3" exact>
            <Question3 />
          </Route>

          <Route path="/Question4" exact>
            <Question4 />
          </Route>

          <Route path="/Review" exact>
            <Review />
          </Route>

          <Route path="/Success" exact>
            <Success />
          </Route>



        
      </div>
    </Router>
  );
}

export default App;
