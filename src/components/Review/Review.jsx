import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link} from 'react-router-dom';


function Review() {

    return (
        <>
            <h1> Review Your Feedback </h1>

            <Link to="/Success"> <button> SUBMIT </button></Link>
        </>
    )
};

export default Review