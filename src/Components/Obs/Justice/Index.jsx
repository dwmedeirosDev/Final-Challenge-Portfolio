import React from 'react'
import * as S from './Style'
import JusticeImg from '../../../Assets/Obs/justice1.jfif'

export default function Justice({Close}){
    return(
        <S.Content>
            <S.Close onClick={Close}/>
            <S.Img src={JusticeImg} alt='Justiça' />
            <S.H1>Paz, Justiça e Instituições eficazes</S.H1>
            <div>
                <S.P>5.1 - Criar e financiar novas ONG's e as que já existem</S.P>
                <S.P>5.2 - Debater questões de todos os tipos dentro da Comunidade</S.P>
                <S.P>5.3 - Seguir e colocar em vigor as leis e política dentro da Comunidade</S.P>
            </div>
        </S.Content>   
    )
}