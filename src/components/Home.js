import React from 'react'
import Products from './Products'
const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" ></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner" style={{filter: 'brightness(0.9)'}}>
                    <div className="carousel-item active">
                        <img src="/images/home/iphone-13-pro-home1.jpg" className="d-block w-100 " height='500px' alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/home/ipad-10th.jpeg" className="d-block w-100 " height='500px' alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/home/multi-circular-phone.jpg" className="d-block w-100" height='500px' alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/home/double-hand-phone.jpeg" className="d-block w-100 " height='500px' alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/home/iphone14pro-multiphone.png" className="d-block w-100 " height='500px' alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/home/iphone12-multiphone.png" className="d-block w-100" height="500px" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Products />
        </div>
        
    )
}

export default Home
