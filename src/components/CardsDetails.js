import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT,ADD,REMOVE } from '../redux/actions/action'


const CardsDetails = () => {

  const [data,setData] = useState([]);
  // console.log(data);

  const {id} = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  
  const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(getdata);


  const compare = ()=>{
    let comparedata = getdata.filter((e)=>{
      return e.id == id
    });
    setData(comparedata);
  }

  // add data
  

  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }
  
  const dlt = (id)=>{
    dispatch(DLT(id));
    history("/");
}

// remove one
const remove = (item)=>{
  dispatch(REMOVE(item))
}

  useEffect(()=>{
    compare();
  },[id])

  return (
    <>
      <div className="container mt-2">
        <section className='container mt-3'>
          <div className="row iteamsdetails">
          {
            data.map((ele)=>{
              return (
                <>
                <div className="col-md-6 items_img">
                  <img src={ele.imgdata} alt="" />
                </div>

            <div className="col-md-6 details container">
                
                    <span className='fs-4 me-3 fw-light'>{ele.rname}</span>
                    <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ★	</span>
                
                    <p><strong>Price</strong>  : ₹{ele.price}</p>
                    
                    <p className='d-flex'>
                      <div className='me-2 fw-bold px-3 py-2 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"green",borderRadius:'5px',color:"#fff"}}>
                        <span style={{fontSize:16}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}><i className='fa fa-minus'></i></span>
                        <span style={{fontSize:18}}>{ele.qnty}</span>
                        <span style={{fontSize:16}} onClick={()=>send(ele)}><i className='fa fa-plus'></i></span>
                      </div>
                      {/* <div><button className='btn btn-danger'><strong>Remove </strong> <span ><i className='fas fa-trash' onClick={()=>dlt(ele.id)} style={{color:"#f0f0f0f0",fontSize:16,cursor:"pointer"}}></i></span></button></div> */}
                      <strong className='align-self-center'>Total: ₹{ele.price * ele.qnty}.00</strong>
                    </p>

                    <p><strong>Supplier</strong>  : {ele.address}</p>
                    <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
            </div>
          
                </>
              )
            })
          }
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails