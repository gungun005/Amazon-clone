import React from 'react'
import img2 from '../src/Bannerphoto.jpg';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import  images  from  "./slider-images";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <Slider autoplay={1297} >
                {images.map((item, index) => (
                    <div key={index} className = "slider-wrapper">
                        <section className = "home__image">
                            <img src={item.image} alt="" />
                        </section>

                    </div>
                ))}

        </Slider>
        
        {/* <img style={{width:"100%", height:"1%"}} src={img2} alt="banner photo" /> */}
        {/* product id,image ,rating,name */}
        <Product 
                    id = "12314"
                    title = "Macbook Pro"
                    price = {175000}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71YRSVXhgQL._SX679_.jpg"
                />
         <Product 
                    id = "12315"
                    title = "OnePlus Nord"
                    price = {27000}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71gag816F7L._SL1500_.jpg"
                />
                 <Product 
                    id = "12316"
                    title = "Amazon Echo"
                    price = {7500}
                    rating = {4}
                    image = "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                    id = "12317"
                    title = "Fit Bit"
                    price = {11999}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                     <Product 
                    id = "12318"
                    title = "OnePlus Q1 Series 4K"
                    price = {85000}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71D89swgrvL._SL1500_.jpg"
                />
    </div>
  )
}

export default Home
