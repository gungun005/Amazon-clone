import React, { useEffect, useState } from 'react'
import axios from 'axios';
import img2 from '../src/Bannerphoto.jpg';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import  images  from  "./slider-images";
import Product from './Product';
import './Home.css';

function Home() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        async function invokeInventoryGetAllAPI (requestBody) {
            console.log("Calling from API");
            const response = await axios.get('http://localhost:8700/search', requestBody);
            console.log(response);
            setProductList(response.data)
        };
        console.log("Triggering useEffect");
         let requestBody = {
            "name" : "chocolate"
        };
        invokeInventoryGetAllAPI(requestBody);
    }, [])

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

        <div className="home__row">
            {productList.map((product) => {
                return (<Product 
                    id = "19297"
                    title = {product.name}
                    price = {product.price}
                    rating = {product.rating}
                    image = "https://images-na.ssl-images-amazon.com/images/I/813zj-065jL._UL1500_.jpg"
                />)
                })
            }
        </div>

    </div>
  )
}

export default Home
