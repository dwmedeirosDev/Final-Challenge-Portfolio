import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <section>
            <div>
                <h1>Portfólio</h1>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/sobremim'>Quem Sou Eu</Link>
                <Link to='/projetos'>Projetos</Link>
                <Link to='/obs'>Obs</Link>
            </div>
        </section>
    )
}