import { useState } from 'react';

export const Contador = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    const handleClickR = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

  return (
    <div>

      <button onClick={handleClick}> sumar </button>
        <h1>Cantidad de clicks: {count} </h1>
      <br></br>
      <button onClick={handleClickR}> restar </button>  
    </div>
  );
};

