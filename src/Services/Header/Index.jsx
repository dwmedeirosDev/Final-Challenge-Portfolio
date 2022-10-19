import React from 'react'
import * as S from './Style'


export default function Header(){
    return(
        <S.ContainerHeader>
            <S.Title>
                <S.H1>David Medeiros</S.H1>
            </S.Title>
            <S.Menu>
                <S.SLink to='/'>Home</S.SLink>
                <S.SLink to='/sobremim'>Quem Sou Eu</S.SLink>
                <S.SLink to='/projetos'>Projetos</S.SLink>
                <S.SLink to='/obs'>ODS</S.SLink>
            </S.Menu>
        </S.ContainerHeader>
    )
}