import React from 'react'
import * as S from './Style'
import EqualityImg from '../../../Assets/Obs/equality1.png'

export default function Equality({Close}){
    return(
        <S.Content>
            <S.Close onClick={Close}/>
            <S.Img src={EqualityImg} alt='Igualdade'/>
            <S.H1>Igualdade de Gênero</S.H1>
            <div>
                <S.P>3.1 - Incentivos a promover particapação de mulheres em trabalhos dentro da comunidade</S.P>
                <S.P>3.2 - Erradicar toda as formas de violêcia contra as mulheres</S.P>
                <S.P>3.3 - Assegurar os valores de igualdade</S.P>
                <S.P>3.4 - Garantir os direitos da mulher</S.P>
            </div>
        </S.Content>  
    )
}