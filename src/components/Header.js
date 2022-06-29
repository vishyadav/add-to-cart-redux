import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/action';

const Header = () => {

    const [price,setPrice] = useState(0);
    // console.log(price);

        const getdata = useSelector((state)=> state.cartreducer.carts);
        // console.log(getdata);

        const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id)=>{
        dispatch(DLT(id))
    }


    const total = ()=>{
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])

    return (
        <>
            <Navbar bg="light" className="shadow py-5" variant="light" style={{ height: "60px"}}>
                <Container>
                    <NavLink to='/' className='me-3 d-none d-sm-block'><img src="https://townmart.in/Content/logo/TM-web.png" alt="" /></NavLink>
                    <NavLink to="/" className="text-decoration-none text-success mx-3 d-none"><h2>TR <span className='text-danger'>Mart</span></h2></NavLink>
                    <Nav className="md-ps-3 me-auto md-border-start">
                        <NavLink to="/" className="text-decoration-none text-dark">
                            <strong>Delivery in 90 Minutes</strong><br />
                            <span className='text-muted overflow-hidden'>Khairatabad metro station, 500004</span>
                        </NavLink>
                    </Nav>
                    <Nav className="me-auto d-none d-sm-block">
                        <input type="text" style={{height:'45px', width:'400px'}} class="form-control" placeholder='What are you looking for?'/>
                    </Nav>
                    <Nav className='me-auto'>
                        <navLink to='/' className='text-decoration text-dark'>
                            <strong><span className='d-none d-sm-block'>Acccount</span><i class="fa fa-user fs-3 d-block d-sm-none" aria-hidden="true"></i></strong>
                        </navLink>
                    </Nav>

                    <Badge badgeContent={getdata.length} color="success" id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} >
                        <i class="fa-solid fa-cart-shopping text-dark" style={{ fontSize: 22, cursor: "pointer" }}></i>
                    </Badge>

                </Container>


                <Menu id="basic-menu" className='pb-0' anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }}>

                    {
                        getdata.length ? 
                        <div className='card_details' style={{maxwidth:'24rem',padding:'0px'}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-between border-bottom">
                                        <h4>My Cart</h4>
                                        <h6>0 <span className='text-muted'>items</span> <br />₹{price}.00</h6>
                                    </div>
                                </div>
                                {
                                getdata.map((e)=>{
                                return (
                                    <>
                                        <div className="row pe-2">
                                            <div className="col-3">
                                                <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                </NavLink>  
                                            </div>
                                            <div className="col-8">
                                                <small className='text-muted'>{e.rname}</small><br />
                                                <small>Price : ₹{e.price}</small>&nbsp;|&nbsp;
                                                <small>Quantity : {e.qnty}</small><br />
                                                <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                    <i className='fas fa-trash smalltrash'></i>
                                                </p>
                                            </div>
                                            <div className="col-1 align-self-center">
                                                <span className='mt-5'style={{color:"#ccc",fontSize:16,cursor:"pointer"}}  onClick={()=>dlt(e.id)}><i className='fas fa-trash largetrash'></i></span>
                                            </div>
                                        </div>
                                    </>
                                        )
                                    })
                                }
                                <div className="row bg-info">
                                <button type='button' className='btn btn-info fw-bold py-2 text-light w-100 d-flex justify-content-between'>
                                <span>Proceed to Buy</span><span>₹{price}.00</span>
                                </button>
                                </div>

                            </div>
                        </div>
                        :
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose' onClick={handleClose} style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your carts is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>

                   
                    }

                </Menu>
            </Navbar>
        </>
    )
}

export default Header