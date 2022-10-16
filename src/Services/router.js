import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Components/Home/Index'
import Aboutme from '../Components/Aboutme/Index'
import Projects from '../Components/Projects/Index'
import Obs from '../Components/Obs/Index'


export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobremim' element={<Aboutme />} />
                <Route path='/projetos' element={<Projects />} />
                <Route path='/obs' element={<Obs />} />
            </Routes>
        </Router>
    )
}