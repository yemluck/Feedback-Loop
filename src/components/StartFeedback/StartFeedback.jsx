import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';


function StartFeedback() {

    return (
        <>
            <div>
                <img src={require("../App/images/feedback3.jpeg")} alt="feedback picture" />
            </div>
            <Link to="/Question1"> <button> Proceed to Feedback </button></Link>
        </>
    )
};

export default StartFeedback;