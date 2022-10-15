import React from 'react'
import * as S from './Style'
import Onu from '../../Assets/Obs/onu-logo.png'
import Health from '../../Assets/Obs/health.png'
import Education from '../../Assets/Obs/education.png'
import Equality from '../../Assets/Obs/equality.png'
import Growth from '../../Assets/Obs/growth.png'
import Justice from '../../Assets/Obs/justice.png'

export default function OBS(){
    return(
        <S.ContainerObs>   
            <S.Logo src={Onu} alt='Onu'/>
            <S.H1>Os Objetivos de Desenvolvimento Sustentável no Complexo da Maré</S.H1>
            <S.P>Os Objetivos de Desenvolvimento Sustentável são um apelo à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, no Complexo da Maré, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Complexo da Maré - RJ.</S.P>
            <S.Mural>
                <S.Img src={Health} alt='Saúde'/>
                <S.Img src={Education} alt='Educação'/>
                <S.Img src={Equality} alt='Igualdade'/>
                <S.Img src={Growth} alt='Crescimento Econômico'/>
                <S.Img src={Justice} alt='Justiça'/>
            </S.Mural>
        </S.ContainerObs>
    )
}