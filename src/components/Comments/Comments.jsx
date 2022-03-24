import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';


function Comments() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const saveComment= (event) => {
        event.preventDefault();
        console.log('in comment function');
        // send data to store
        dispatch({
            type: 'SUBMIT_COMMENT',
            payload: { comment: comment }
        })
        // clear inputs
        setComment('')
        // push to next component
        // initially used Link but it stopped working once I put a function in my button
        // will do more research to figure out why
        history.push('/review')
    }

    return (
        <>
            <h1> Any comments you want to leave? </h1>

            <form>
                <label htmlFor="comments"> Comments </label><br></br>
                <input type="text"  value={comment} onChange={evt => setComment(evt.target.value)}/>
                <br></br>
                <Link to="/support"><button > Back </button></Link>
                <button onClick={saveComment}> Next </button>
            </form>
        </>
    )
};

export default Comments