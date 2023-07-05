import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Menu from './componentes/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Portifolio from './pages/Portifolio'
import Contato from './pages/Contato'
import Footer from './componentes/Footer'

const Router = () => {
    return (
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>
                <Route path="/portifolio" element={<Portifolio/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
            </Routes>
            <Footer content='Feito por Naíza'/>
        </BrowserRouter>
    )
}

export default Router