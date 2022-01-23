import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';


function Question1() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');

    const saveFeeling = (event) => {
        event.preventDefault();
        console.log('in saveFeeling function');
        // send data to store
        dispatch({
            type: 'SUBMIT_FEELING',
            payload: {feeling: Number(feeling)}
        })
        // clear inputs
        setFeeling('')
        history.push('/Question2')
    }

    return (
        <>
        <h1> How are you feeling today?</h1>

        <form>
            <label htmlFor="feeling"> Feeling? </label><br></br>
            <select name="feeling" required value={feeling} onChange={evt => setFeeling(evt.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br></br>
            <Link to="/Question2"> <button onClick={saveFeeling}> Next </button></Link>
        </form>
        </>
    )
};

export default Question1;