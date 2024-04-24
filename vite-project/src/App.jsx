import { BrowserRouter } from "react-router-dom";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Main from "./layout/Main.jsx"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
