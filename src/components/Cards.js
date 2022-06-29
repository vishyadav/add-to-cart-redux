import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  // console.log(data);


  const dispatch = useDispatch();


  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-5'>
      <h2 className='text-center'>Featured Products</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
              <div className="col-md-3">
                <Card style={{border:"2px solid #f0f0f0" }} className="mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"12rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title className='text-muted fw-light fs-6 text_limit' style={{height:"2.5rem"}}>{element.rname}</Card.Title>
                    <strong>
                     Price : ₹ {element.price}.00
                    </strong><br />
                    <strong>
                      Qty: {element.qnty}
                    </strong><br />
                    <small className='text-muted text_limit'>
                      {element.somedata}
                    </small>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="info"  
                      onClick={()=> send(element)}
                     className='col-lg-12 fw-bold fs-6 text-light mt-2'>Add to Cart</Button>
                    </div>
                  
                  </Card.Body>
                  
                </Card>
                </div>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards