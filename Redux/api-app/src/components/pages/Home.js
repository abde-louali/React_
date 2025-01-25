import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://fakestoreapi.in/api/products')
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error('Invalid data format:', response.data);
        }
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    if (!isPaused && products.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused, products.length]);

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div 
            className="relative w-full md:w-1/2 h-96 overflow-hidden rounded-xl shadow-xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={product.id}
                  className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img
                    loading="lazy"
                    src={product.placeholder}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Loading products...</p>
            )}
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Découvrez Notre Collection de Smartphones
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Bienvenue dans notre boutique en ligne, où vous trouverez les derniers 
              smartphones haut de gamme. Nous proposons une sélection soigneusement 
              choisie des meilleures marques, avec des prix compétitifs et un 
              service client exceptionnel.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 font-medium">
                ✓ Livraison rapide et gratuite
              </p>
              <p className="text-gray-600 font-medium">
                ✓ Garantie 24 mois sur tous nos produits
              </p>
              <p className="text-gray-600 font-medium">
                ✓ Service après-vente premium
              </p>
            </div>
            <button 
              onClick={() => navigate('/Products')}
              className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg text-dark"
            >
              Découvrir la Boutique
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
