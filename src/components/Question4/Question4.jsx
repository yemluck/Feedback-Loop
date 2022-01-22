import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';


function Question4() {

    return (
        <>
            <h1> Any comments you want to leave? </h1>
            <Link to="/Review"> <button> Next </button></Link>
        </>
    )
};

export default Question4