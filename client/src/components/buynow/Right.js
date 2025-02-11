import { useState , useEffect} from "react"
import React   from 'react'

const Right = ({item}) => {


  
  const [price , setPrice] = useState(0);

  useEffect(() => {
    totalAmount();
  },[item]);


  const totalAmount = () => {
    let price = 0 ;
    item.map((item) => {
      price += item.price.cost
    });
    setPrice(price)
  }



  return (
    <div className='right_buy'>
  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />        <div className='cost_right'>
            <p>Your order is eligible for FREE Delivery</p>
            <span style={{color:"595959"}}>Select this option at checkout</span>

            <h3>Subtotal ({item.length} item) :<span style={{fontWeight:700}}>${price}</span> </h3>
            <button className='rightbuy_btn'>Process to Buy</button>
            <div className='emi'>Emi available</div>
        </div>
    </div>
  )
}

export default Right