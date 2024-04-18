import { Menu } from "lucide-react"
import CartWidget from "./CartWidget"
function Navbar() {
    return(
        <header className="bg-red-700 p-4 flex justify-between shadow-md">
        <h1 id="title" className="title header__title font-serif">Salud Integral</h1>
        <nav className="md:flex  md:gap-4 font-mono">
          <a className="hidden md:flex" href="">Todos</a>
          <a className="hidden md:flex" href="">Proteinas</a>
          <a className="hidden md:flex" href="">Creatinas</a>
          <a className="hidden md:flex" href="">Combos</a>
          <div className="flex">
            <Menu className="md:hidden" width={24} height={24}/>
            <CartWidget/><span>0</span>
          </div>
        </nav>
      </header>
    )
}

export default Navbar