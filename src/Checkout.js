import React from 'react';
import { useStateValue } from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

function Checkout() {
    const [ {basket} ] = useStateValue();


    return (
        <div className = "checkout">
            <div className="checkout__left">
            <img 
            className = "checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/affordability/phase2/Header_PC_1500x178_English1.jpg" alt="" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Basket is empty.</h2>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title"> Your Shopping Basket.</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0  && (
                <div className="checkout__right">
                    <SubTotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;