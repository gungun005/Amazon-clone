import React from 'react'
import img2 from '../src/Bannerphoto.jpg';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import  images  from  "./slider-images";

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
    </div>
  )
}

export default Home
