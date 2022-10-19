import React, {useState} from 'react'
import * as S from './Style'
import Modal from 'react-modal'
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
import Footer from '../../Services/Footer/Index'

export default function OBS(){
    
    const [pagehealth, setPagehealth] = useState(false)
    const [pageeducation, setPageeducation] = useState(false)
    const [pageequality, setPageequality] = useState(false)
    const [pagegrowth, setPagegrowth] = useState(false)
    const [pagejustice, setPagejustice] = useState(false)


    function ChangeHealth(){
        setPagehealth(!pagehealth)
    }

    function ChangeEducation(){
        setPageeducation(!pageeducation)
    }

    function ChangeEquality(){
        setPageequality(!pageequality)
    }

    function ChangeGrowth(){
        setPagegrowth(!pagegrowth)
    }

    function ChangeJustice(){
        setPagejustice(!pagejustice)
    }

    return(
        <S.ContainerObs>  
            <Header /> 
            <S.Logo src={Onu} alt='Onu'/>
            <S.H1>Os Objetivos de Desenvolvimento Sustentável no Complexo da Maré</S.H1>
            <S.P>Os Objetivos de Desenvolvimento Sustentável são um apelo à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, no Complexo da Maré, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Complexo da Maré - RJ.</S.P>
            <S.Mural>
                <S.Img onClick={()=>{ChangeHealth()}} src={Health} alt='Saúde'/>
                <Modal 
                    isOpen={pagehealth} 
                    onRequestClose={ChangeHealth}
                    style={{
                        overlay:{
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '0 auto'
                        },
                        content:{
                            backgroundColor: 'rgba(0, 0, 0, 0.85)',
                            borderRadius: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            border: 'none'
                        }
                    }}
                >
                    <HealthComponent />
                </Modal>
                <S.Img onClick={() => {ChangeEducation()}} src={Education} alt='Educação'/>
                <Modal 
                    isOpen={pageeducation} 
                    onRequestClose={ChangeEducation}
                    style={{
                        overlay:{
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '0 auto',
                        },
                        content:{
                            backgroundColor: 'rgba(0, 0, 0, 0.85)',
                            borderRadius: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: 'none'
                        }
                    }}
                >
                    <EducationComponent />
                </Modal>
                <S.Img onClick ={()=>{ChangeEquality()}} src={Equality} alt='Igualdade'/>
                <Modal 
                    isOpen={pageequality} 
                    onRequestClose={ChangeEquality}
                    style={{
                        overlay:{
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '0 auto'
                        },
                        content:{
                            backgroundColor: 'rgba(0, 0, 0, 0.85)',
                            borderRadius: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            border: 'none'
                        }
                    }}
                >
                    <EqualityComponent />
                </Modal>
                <S.Img onClick ={()=>{ChangeGrowth()}} src={Growth} alt='Crescimento Econômico'/>
                <Modal 
                    isOpen={pagegrowth} 
                    onRequestClose={ChangeGrowth}
                    style={{
                        overlay:{
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '0 auto'
                        },
                        content:{
                            backgroundColor: 'rgba(0, 0, 0, 0.85)',
                            borderRadius: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            border: 'none'
                        }
                    }}
                >
                    <GrowthComponent />
                </Modal>
                <S.Img onClick ={()=>{ChangeJustice()}} src={Justice} alt='Justiça'/>
                <Modal 
                    isOpen={pagejustice} 
                    onRequestClose={ChangeJustice}
                    style={{
                        overlay:{
                            width: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '0 auto'
                        },
                        content:{
                            backgroundColor: 'rgba(0, 0, 0, 0.85)',
                            borderRadius: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            border: 'none'
                        }
                    }}
                >
                    <JusticeComponent />
                </Modal>
            </S.Mural>
            <Footer />
        </S.ContainerObs>
    )
}