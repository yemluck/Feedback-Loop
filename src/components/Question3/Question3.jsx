import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

function Question3() {

    return (
        <>
            <h1> How well are you being supported </h1>
            <Link to="/Question4"> <button> Next </button></Link>
        </>
    )
};

export default Question3