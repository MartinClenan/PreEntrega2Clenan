import { MenuIcon } from "lucide-react";
import CartWidget from "./CartWidget";

function Header() {
  return (
    <header className="bg-red-700 p-4 flex justify-between shadow-md">
      <h1 id="title" className="title header__title">
        Pi.Products
      </h1>
      <nav className="flex gap-4 items-center">
       <div className="hidden md:flex  md:gap-4 items-center">
          <a href="">Inicio</a>
          <a href="">Productos</a>
          <a href="">Contacto</a>
        </div>
        <MenuIcon  width={24} height={24} className="md:hidden"/> 
        <CartWidget width={24} height={24} /><span>0</span>
      </nav>
    </header>
  );
}

export default Header;
