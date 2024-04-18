
import { Button } from "antd";
import { useState } from "react";

function Greeting(props) {
  const [counter, setCounter] = useState(0);
  const [buttonColor, setButtonColor] = useState('bg-blue-300');

  const handleClick = () => {
    setCounter(prevCounter => prevCounter + 1);
    setButtonColor('bg-yellow-500');
  };

  return (
    <div className="product-card mx-auto">
      <img src="https://picsum.photos/200" alt="" />
      <h2>{props.name}</h2>
      <h3>Precio: ${props.precio}</h3>
      <Button className="mt-2 mx-1 bg-slate-300">Ver Producto</Button>
      <Button onClick={handleClick} className={`mt-2 mx-1 ${buttonColor}`}>
        Like's<span className="mx-1">{counter}</span>
      </Button>
    </div>
  );
}

export default Greeting;