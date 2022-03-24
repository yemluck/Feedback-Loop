import React,  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
// mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';



function Question1() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState(1);

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
       history.push('/understanding')
    }

    return (
       
       <Card sx={{  width: 700, height: 500, margin: 'auto' }}>
         <CardContent sx={{  alignItems: 'center', height: "400px"}}>
        <h1> How are you feeling today?</h1>


        <FormControl fullWidth sx={{ m: 10, maxWidth: 120 }}>
            <InputLabel id="feeling">Feeling</InputLabel>
                <Select
                    labelId="feeling"
                    id="demo-simple-select"
                    value={feeling}
                    label="Feeling"
                    onChange={evt => setFeeling(evt.target.value)}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
         </FormControl>
            <Button variant="contained" onClick={saveFeeling} sx={{ marginTop: 3, position: 'absolute', right: 250, bottom: 200 }}> Next</Button>
        </CardContent>
        </Card>
        
     
    )
};

export default Question1;