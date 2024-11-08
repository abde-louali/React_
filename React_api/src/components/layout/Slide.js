import React, { useEffect, useState } from 'react';

export default function Slide() {
    const [listP, setlistP] = useState([]);
    
    useEffect(() => {
        fetch(`https://fakestoreapi.in/api/products`)
            .then(res => res.json())
            .then(res => setlistP(res.products));
    }, []);
    
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    {listP.slice(0, 3).map((_, index) => (
                        <li 
                            key={index} 
                            data-bs-target="#carouselExampleIndicators" 
                            data-bs-slide-to={index} 
                            className={index === 0 ? "active" : ""}
                        ></li>
                    ))}
                </ol>
                
                <div className="carousel-inner">
                    {listP.slice(0, 3).map((img, index) => (
                        <div 
                            className={`carousel-item ${index === 0 ? "active" : ""}`} 
                            key={index}
                        >
                            <img className="d-block w-100"  style={{width:'500px',height:'500px'}} src={img.image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
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
        </>
    );
}
