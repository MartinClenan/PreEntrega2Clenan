import React from 'react'
import { MenuIcon } from "lucide-react";
import { Link } from 'react-router-dom';
import CartWidget from './layout/CartWidget';

function Navbar() {
  return (
    <nav className="flex gap-4 items-center justify-center ">
       <div className="hidden md:flex  md:gap-4 items-center">
          
          <Link to="/">Home</Link>
          
          <Link to="/Personajes">Personajes</Link>

          <Link to="/contacto">Contacto</Link>      
        </div>
        <MenuIcon  width={20} height={20} className="md:hidden"/> 
        <CartWidget /><span>0</span>
      </nav>
  )
}

export default Navbar