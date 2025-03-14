import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

export default function ProductViewer(){
  const products = ['телефон','ноутбук','наушник','теливизор','камера'];

  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('recentlyViewed');
    if (storedProducts) {
      setRecentlyViewed(JSON.parse(storedProducts));
    }
  }, []);

  const handleProductClick = (product) => {
    setRecentlyViewed((prev) => {
      const updatedList = prev.filter((item) => item !== product);
      const newList = [product, ...updatedList];
      localStorage.setItem('recentlyViewed', JSON.stringify(newList));
      return newList;
    });
  };

  return (
    <>
      <h1>Список продуктов</h1>
      <div>
        {products.map((product, index) => (
          <button key={index} onClick={() => handleProductClick(product)}>
            {product}
          </button>
        ))}
      </div>

      <h2>Последние просмотренные</h2>
      <ul>
        {recentlyViewed.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </>
  );
};

