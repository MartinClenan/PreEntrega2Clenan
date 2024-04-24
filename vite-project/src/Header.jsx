import { Routes , Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Input } from "antd";


function Header() {
  return (
    <header className="bg-red-700 p-4 flex justify-between shadow-md">
      <h1 id="title" className="title header__title">
        RIcky y Morte
      </h1>
      <Routes>
        <Route path="/" element={<Input type="text" placeholder="Search"/>} />
      </Routes>
      <Navbar />
    </header>
  );
}

export default Header;
