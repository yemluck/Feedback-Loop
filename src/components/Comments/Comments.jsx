import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
// Mui
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

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
        <Card sx={{ width: 700, height: 500, margin: 'auto', backgroundColor: "" }}>

            <h1> Any comments you want to leave? </h1>

            <form>
                <TextField sx={{ m: 10}}
                    type="text"  
                    value={comment} 
                    multiline
                    label="Comments" 
                    onChange={evt => setComment(evt.target.value)}
                />
                <br></br>
                <div className='uBtn'>
                    <Link to="/support"><Button variant='contained' > Back </Button></Link>
                    <Button variant='contained' onClick={saveComment}> Next </Button>
                </div>
            </form>
        </Card>
    )
};

export default Comments