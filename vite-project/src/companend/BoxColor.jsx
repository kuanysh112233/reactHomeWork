import { useState } from 'react'
import './App.css'

const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
  };
  
  export default function RandomColorBox() {
    const [color, setColor] = useState(getRandomColor());
  
    const changeColor = () => {
      setColor(getRandomColor());
    };
  
    return (
      <div className="box1">
        <div className="box2" style={{ backgroundColor: color }}>
          <p className="text">{color}</p>
        </div>
        <button className="btn" onClick={changeColor}>
          Түсті өзгерту
        </button>
      </div>
    );
  }