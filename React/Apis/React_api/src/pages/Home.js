// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function RandomImageCarousel() {
//   // List of all images
//   const allImages = [
//     'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Image+1',
//     'https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Image+2',
//     'https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Image+3',
//     'https://via.placeholder.com/600x400/FF33A1/FFFFFF?text=Image+4',
//     'https://via.placeholder.com/600x400/A1FF33/FFFFFF?text=Image+5',
//     'https://via.placeholder.com/600x400/33A1FF/FFFFFF?text=Image+6',
//   ];

//   const [randomImages, setRandomImages] = useState([]);

//   // Select 3 random images from the list
//   useEffect(() => {
//     const getRandomImages = () => {
//       // Shuffle the array and select the first 3 images
//       const shuffledImages = [...allImages].sort(() => Math.random() - 0.5);
//       setRandomImages(shuffledImages.slice(0, 3));
//     };
    
//     getRandomImages();
//   }, []);

//   return (
//     <div className="container my-5">
//       <h2 className="text-center mb-4">Random Image Carousel</h2>
//       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           {randomImages.map((image, index) => (
//             <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//               <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }
