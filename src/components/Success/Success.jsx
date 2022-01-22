import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';


function Success() {

    return (
        <>
            <h1> Feedback Submitted Successfully </h1>
            <h2> Thank You! </h2>
            <Link to="/"> <button> Leave New Feedback </button></Link>
        </>
    )
};

export default Success;