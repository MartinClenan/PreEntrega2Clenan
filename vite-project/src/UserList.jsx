import React, { useState, useEffect } from "react";

function UserList() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductos(data);
      });
  }, []);


  return <div>{JSON.stringify(productos)}</div>;
}


export default UserList;
