import Page from '../Page'
import UserCardContainer from '../UserCardContainer'
import { Routes , Route } from "react-router-dom";
import Home from '../layout/Home'
import Personajes from '../layout/Personajes'
import Contacto from '../layout/Contacto'

function Main() {
    return (
        <main className="p-4 grow">
           
            <Routes>
                <Route path='/' element={< Home />} />
                <Route path='/Personajes'element={<Personajes/>} /> 
                <Route path='/contacto' element={< Contacto/>}/>             
            </Routes>

        </main>
    )
}
export default Main