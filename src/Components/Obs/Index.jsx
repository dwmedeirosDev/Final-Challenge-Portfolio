import React, {useState} from 'react'
import * as S from './Style'
import Onu from '../../Assets/Obs/onu-logo.png'
import Health from '../../Assets/Obs/health.png'
import Education from '../../Assets/Obs/education.png'
import Equality from '../../Assets/Obs/equality.png'
import Growth from '../../Assets/Obs/growth.png'
import Justice from '../../Assets/Obs/justice.png'
import HealthComponent from '../Obs/Health/Index'
import EducationComponent from '../Obs/Education/Index'
import EqualityComponent from '../Obs/Equality/Index'
import GrowthComponent from '../Obs/Growth/Index'
import JusticeComponent from '../Obs/Justice/Index'
import Header from '../../Services/Header/Index'

export default function OBS(){
    
    const [pagehealth, setPagehealth] = useState(false)
    const [pageeducation, setPageeducation] = useState(false)
    const [pageequality, setPageequality] = useState(false)
    const [pagegrowth, setPagegrowth] = useState(false)
    const [pagejustice, setPagejustice] = useState(false)

    return(
        <S.ContainerObs>  
            <Header /> 
            <S.Logo src={Onu} alt='Onu'/>
            <S.H1>Os Objetivos de Desenvolvimento Sustentável no Complexo da Maré</S.H1>
            <S.P>Os Objetivos de Desenvolvimento Sustentável são um apelo à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, no Complexo da Maré, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Complexo da Maré - RJ.</S.P>
            <S.Mural>
                <S.Img onClick={()=>(setPagehealth(!pagehealth))} src={Health} alt='Saúde'/>
                {pagehealth? <HealthComponent /> : null}

                <S.Img onClick ={()=>(setPageeducation(!pageeducation))} src={Education} alt='Educação'/>
                {pageeducation? <EducationComponent /> : null}

                <S.Img onClick ={()=>(setPageequality(!pageequality))} src={Equality} alt='Igualdade'/>
                {pageequality? <EqualityComponent /> : null}

                <S.Img onClick={()=>(setPagegrowth(!pagegrowth))} src={Growth} alt='Crescimento Econômico'/>
                {pagegrowth? <GrowthComponent /> : null}

                <S.Img onClick={()=>(setPagejustice(!pagejustice))} src={Justice} alt='Justiça'/>
                {pagejustice? <JusticeComponent /> : null}              
            </S.Mural>
        </S.ContainerObs>
    )
}