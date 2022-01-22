import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

function Question2 () {

    return(
        <>
        <h1> How well are you understanding the content? </h1>
        <Link to="/Question3"> <button> Next </button></Link>
        </>
    )
};

export default Question2