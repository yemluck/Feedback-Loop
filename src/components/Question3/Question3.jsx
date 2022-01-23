import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

function Question3() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [support, setSupport] = useState('');

    const saveSupport = (event) => {
        event.preventDefault();
        console.log('in Understanding function');
        // send data to reducer
        dispatch({
            type: 'SUBMIT_SUPPORT',
            payload: { support: Number(support) }
        })
        // clear inputs
        setSupport('')
        history.push('/Comments')
    }

    return (
        <>
        <h1> How well are you being supported </h1>

        <form> 
             <label htmlFor="support"> Support? </label><br></br>
                <select name="support" required value={support} onChange={evt => setSupport(evt.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>   <br></br>  
            
            <Link to="/Question4"> <button onClick={saveSupport}> Next </button></Link>
        </form>
        </>
    )
};

export default Question3