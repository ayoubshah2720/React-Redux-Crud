
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, loadProducts } from '../redux/action';
import { useEffect } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import {useNavigate} from "react-router-dom"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Home = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const {products} = useSelector(state => state.products)

    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete.?")){
            dispatch(deleteProduct(id))
        }
    }
    useEffect(()=>{
        dispatch(loadProducts() )
    },[dispatch])
  return (
    <div className='homeContainer' style={{marginTop:'100px'}}>
    <Button variant='contained' color="primary" onClick={()=> navigate("/addProduct")}> Add </Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> Title </StyledTableCell>
            <StyledTableCell align="center"> Description </StyledTableCell>
            <StyledTableCell align="center"> Brand </StyledTableCell>
            <StyledTableCell align="center"> Price </StyledTableCell>
            <StyledTableCell align="center"> Action </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell component="th" scope="row">
                {product.title}
              </StyledTableCell>
              <StyledTableCell align="center">{product.description}</StyledTableCell>
              <StyledTableCell align="center">{product.brand}</StyledTableCell>
              <StyledTableCell align="center">{product.price}</StyledTableCell>
              <StyledTableCell align="center">
                      <ButtonGroup variant="contained" aria-label="outlined primary button group">
                          <Button style={{marginRight:"5px"}} color="secondary" onClick={()=> handleDelete(product.id)} >Delete</Button>
                          <Button variant='contained' color="primary" onClick={()=> navigate("/editProduct/"+ product.id)}> Edit </Button>
                      </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Home