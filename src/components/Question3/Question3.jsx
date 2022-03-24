import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
//MUI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';


function Question3() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [support, setSupport] = useState(1);

    const saveSupport = (event) => {
        event.preventDefault();
        console.log('in saveSupport function');
        // send data to reducer
        dispatch({
            type: 'SUBMIT_SUPPORT',
            payload: { support: Number(support) }
        })
        // clear inputs
        setSupport('')
       history.push('/comments')
    }

    return (
        <Card sx={{ width: 700, height: 500, margin: 'auto'}}>
            <CardContent sx={{ alignItems: 'center', height: "400px" }}>
            <h1> How well are you being supported </h1>

                <FormControl sx={{ m: 10, minWidth: 120 }}>
                    <InputLabel id="support">Support</InputLabel>
                    <Select
                        labelId="support"
                        value={support}
                        label="support"
                        onChange={evt => setSupport(evt.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>
            <div className='uBtn'>
                <Link to="/understanding"><Button variant="contained" > Back </Button></Link>
                <Button variant="contained" onClick={saveSupport}> Next </Button>
            </div>
        </Card>
    )
};

export default Question3