import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';


function Question1() {

    return (
        <>
        <h1> How are you feeling today?</h1>


        <Link to="/Question2"> <button> Next </button></Link>
        </>
    )
};

export default Question1;