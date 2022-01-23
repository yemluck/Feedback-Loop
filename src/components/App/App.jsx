import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Question1 from "../Question1/Question1";
import Question2 from "../Question2/Question2";
import Question3 from "../Question3/Question3";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Success from "../Success/Success";
import StartFeedback from "../StartFeedback/StartFeedback"

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        
          <Route path="/" exact>
            <StartFeedback />
          </Route>

          <Route path="/Question1" exact>
            <Question1 />
          </Route>

          <Route path="/Question2" exact>
            <Question2 />
          </Route>

          <Route path="/Question3" exact>
            <Question3 />
          </Route>

          <Route path="/Comments" exact>
            <Comments />
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
