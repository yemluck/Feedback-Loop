import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';


function Comments() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const saveComment= (event) => {
        event.preventDefault();
        console.log('in saveFeeling function');
        // send data to store
        dispatch({
            type: 'SUBMIT_COMMENT',
            payload: { comment: comment }
        })
        // clear inputs
        setComment('')
        history.push('/Review')
    }

    return (
        <>
            <h1> Any comments you want to leave? </h1>

            <form>
                <label htmlFor="comments"> Comments </label><br></br>
                <input type="text"  value={comment} onChange={evt => setComment(evt.target.value)}/>
                <br></br>
            <Link to="/Review"> <button onClick={saveComment}> Next </button></Link>
            </form>
        </>
    )
};

export default Comments