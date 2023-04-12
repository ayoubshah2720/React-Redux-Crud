import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/action';


const Addproduct = () => {
    const [state, setState] = useState({
        title: "",
        description: "",
        brand: "",
        price: "",
    })

    const [error, setError] = useState()
    let dispatch = useDispatch()

    const {title, description, brand, price} = state;
    let navigate = useNavigate();
    
    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !description || !brand || !price){
            setError("All fields required.!")
        } else {
            dispatch(addProduct(state))
            navigate("/")
            setError("")
        }
    }


  return (
      <div style={{marginTop: '100px'}}>
          <Button variant='contained' color="secondary" onClick={() => navigate("/")}> Back </Button>
          <h2> Add Product </h2>
          {error && <h3 style={{color: "red"}}> {error} </h3>}
          <Box
              component="form"
              sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
          >
              <TextField name='title' onChange={handleInputChange} id="outlined-basic" label="Product Name" variant="standard" value={title} type='text' /> <br />
              <TextField name='description' onChange={handleInputChange} id="outlined-basic" label="Description" variant="standard" value={description} type='text' /> <br />
              <TextField name='brand' onChange={handleInputChange} id="outlined-basic" label="Brand" variant="standard" value={brand} type='text' /> <br />
              <TextField name='price' onChange={handleInputChange} id="outlined-basic" label="Price" variant="standard" value={price} type='number' /> <br />
          </Box>
          <Button variant='contained' color="primary" onClick={handleSubmit}> Submit </Button>
      </div>
  )
}

export default Addproduct