import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';

function Question2 () {
    const history = useHistory();
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState(1);

    const saveUnderstanding = (event) => {
        event.preventDefault();
        console.log('in saveUnderstanding function');
        // send data to reducer
        dispatch({
            type: 'SUBMIT_UNDERSTANDING',
            payload: { understanding: Number(understanding) }
        })
        // clear inputs
        setUnderstanding('')
        // push to next route
        // Link doesn't work
        history.push('/support')
    }

    return(
        <>
        <h1> How well are you understanding the content? </h1>

        <form>
            <label htmlFor="understanding"> Understanding? </label><br></br>
                <select name="understanding" required value={understanding} onChange={evt => setUnderstanding(evt.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select><br></br>
            <Link to="/feeling"><button > Back </button></Link>
            <button onClick={saveUnderstanding}> Next </button>
        </form>
        </>
    )
};

export default Question2