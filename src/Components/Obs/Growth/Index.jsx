import React from 'react'
import * as S from './Style'
import GrowthImg from '../../../Assets/Obs/growth1.jfif'

export default function Growth(){
    return(
        <S.Content>
            <S.Img src={GrowthImg} alt='Crescimento Ecônimico'/>
            <S.H1>Trabalho decente e crescimento econômico</S.H1>
            <div>
                <S.P>4.1 - Investir e incentivar pequenos comércios</S.P>
                <S.P>4.2 - Como consequência da (4.1) aumentar o número de vagas de emprego</S.P>
                <S.P>4.3 - Proteger os direitos trabalhistas</S.P>
            </div>
        </S.Content>
    )
}