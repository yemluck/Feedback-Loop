import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


function Success() {

    return (
        <>
            <h1> Feedback Submitted Successfully </h1>
            <img src={require("./thumbsup.gif")} alt="thumbsup gif" />
            <h2> Thank You! </h2>
            <Link to="/"> <Button variant='contained'> Leave New Feedback </Button></Link>
        </>
    )
};

export default Success;