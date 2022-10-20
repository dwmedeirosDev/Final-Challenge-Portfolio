import React from 'react'
import * as S from './Style'
import Ciep from '../../../Assets/Obs/ciep.jpg'

export default function Education({Close}){
    return(
        <section>  
            <S.Content>
                <S.Close onClick={Close}/>
                <S.Img src={Ciep} alt='Cieps'/>
                <S.H1>Educação de Qualidade</S.H1>
                <div>
                    <S.P>2.1 - Projetos Sociocultural nas Escolas e Cieps</S.P>
                    <S.P>2.2 - Incentivo a prática de esportes</S.P>
                    <S.P>2.3 - Melhorar a gestão e controle de presença e participação dos alunos</S.P>
                </div>
            </S.Content>
        </section>
    )
}