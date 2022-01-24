import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Success() {

    return (
        <>
            <h1> Feedback Submitted Successfully </h1>
            <img src={require("./thumbsup.gif")} alt="thumbsup gif" />
            <h2> Thank You! </h2>
            <Link to="/"> <button> Leave New Feedback </button></Link>
        </>
    )
};

export default Success;