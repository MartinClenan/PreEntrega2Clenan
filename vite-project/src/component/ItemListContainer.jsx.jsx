import { Button } from "antd";
import { useState } from "react";
function ItemListContainer({name, age, isDev}) {


  // const elResultadoDelHook = useState("Martin") //["Martin", setNombre]//["Martin", fn(){}]
  // const nombre = elResultadoDelHook[0] //undefined
  // const setNombre = elResultadoDelHook[1] //función

  const [nombre, setNombre] = useState("Martin");

  const handleClick = () => {
    // nombre = "Emanuel"
    // console.log("Click");
    // console.log(nombre);
    setNombre("Emanuel");
  }

  console.log(isDev);

  return (
    <div className={`p-4 transition rounded-md shadow-md user-card hover:scale-105 group ${nombre === "Martin" ? " bg-red-500" : " bg-slate-400" }`}>
      <div className="overflow-hidden aspect-video">
        <img className="w-full transition-all duration-500 rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150" src="https://picsum.photos/400" alt="card image"/>
      </div>
      <h3 className="font-bold my-2">{name}</h3>
      <p className="text-sm">{age} años </p>
      <Button className="mt-2 mx-1 bg-slate-300" onClick={handleClick}>Ver mas</Button>
    </div>
  );
}

export default ItemListContainer;
