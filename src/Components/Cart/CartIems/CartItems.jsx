import React from 'react'
import cartitems from './keyboard.png'
import "./cartItems.scss"
import axios from 'axios'
import { useState,useEffect } from 'react'
import { addToCart  } from '../../Products/Detail/ProductDetail'
import { useSelector ,  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { emptycartIteam, removeToCart ,incrementProduct ,reduceProduct,removeFromCart } from '../../../store/cartSlice'
import { useDispatch } from 'react-redux'
import {toast} from 'react-toastify';
function CartItems() {
    const [cartItems, setCartItems] = useState([]);

  const {carts} = useSelector((state)=>state.allCart);
const [quantity, setQuantity] = useState(5);

 const dispatch = useDispatch();


 const removeProductHandler = (e) => {
    dispatch(removeFromCart(e));
 }
  const removeAll= ()=>{
    dispatch(emptycartIteam())
    }
    const decreament=(e)=>{
        if(quantity>1){
            setQuantity(prevCount=>prevCount-1 )
        }
      
        
      }
      const increament=(e)=>{
        setQuantity(prevCount=>prevCount+1)
      }
     
        
  return (
    <>
        <div className='row justify-content-center m-0'>
            <div className='col-md-8 mt-5 mb-5 cardsdetails'>
                <div className="card">
                    <div className="card-header bg-dark p-3">
                        <div className='card-header-flex'>
                            <h5 className='text-white m-0'>Cart Calculation{carts.length >0 ? `(${carts.length})`:""}</h5>
                            {
                                carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm'
                               onClick={removeAll} 
                                ><i className='fa fa-trash-alt mr-2'></i><span>EmptyCart</span></button>
                                    : ""
                            }
                        </div>

                    </div>
                    <div className="card-body p-0">
                            {
                                carts.length === 0 ? <table className='table cart-table mb-0'>
                                    <tbody>
                                        <tr>
                                            <td colSpan={6}>
                                                <div className='cart-empty'>
                                                    <i className='fa fa-shopping-cart'></i>
                                                    <p>Your Cart Is Empty</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> :
                                <table className='table cart-table mb-0 table-responsive-sm'>
                                    <thead>
                                        <tr>
                                            <th>Action</th>
                                            <th>Product</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th className='text-right'> <span id="amount" className='amount'>Total Amount</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            carts.map((data,index)=>{
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <button className='prdct-delete'
                                                         onClick={() => removeProductHandler((data))}
                                                                ><i className='fa fa-trash-alt'></i></button>
                                                            </td>
                                                            <td><div className='product-img'><img src={data.image} alt="" /></div></td>
                                                            <td><div className='product-name'><p>{data.title }</p></div></td>
                                                            <td>${data.price}</td>
                                                            <td>
                                                                <div className="prdct-qty-container">
                                                                    <button className='prdct-qty-btn' type='button' onClick={()=>decreament(data.id)}
                                                                   >
                                                                        <i className='fa fa-minus'></i>
                                                                    </button>
                                                                    <input type="text" className='qty-input-box' value={quantity} disabled name="" id="" />
                                                                    <button className='prdct-qty-btn' type='button' onClick={()=>increament(data.id)} >
                                                                        <i className='fa fa-plus'></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td className='text-right'>₹</td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>&nbsp;</th>
                                            <th colSpan={3}>&nbsp;</th>
                                            <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'></span></th>
                                            <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>₹ </span></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            }
                    </div>
                </div>
            </div>
        </div>
    </>
)



                        }

                                         
  
export default CartItems
