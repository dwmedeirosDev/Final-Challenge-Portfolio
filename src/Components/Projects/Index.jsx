import React from 'react'
import * as S from './Style'
import Portflow from '../../Assets/Projects/portflow.png'
import DogAPI from '../../Assets/Projects/dogapi.png'
import Todolist from '../../Assets/Projects/todolist.png'
import Header from '../../Services//Header/Index'
import Footer from '../../Services/Footer/Index'

export default function Projects(){
    return(
        <S.ContainerProjects>
            <Header />
            <S.All>
                <S.Project>
                    <S.Img src={Portflow} alt='Portflow' />
                    <S.Content>
                        <S.H2>Portflow</S.H2>
                        <S.P><S.A href="https://dwmedeirosdev.github.io/Portflow-Project/" target="_blank" rel="noreferrer">Site</S.A></S.P>
                        <S.P><S.A href="https://github.com/dwmedeirosDev/Portflow-Project" target="_blank" rel="noreferrer">Repositório GitHub</S.A></S.P>
                    </S.Content>
                </S.Project>
                <S.Project>
                    <S.Img src={DogAPI} alt='Portflow' />
                    <S.Content>
                        <S.H2>DogAPI</S.H2>
                        <S.P><S.A href="https://dog-api-dwmedeiros.netlify.app/" target="_blank" rel="noreferrer">Site</S.A></S.P>
                        <S.P><S.A href="https://github.com/dwmedeirosDev/Dog-API" target="_blank" rel="noreferrer">Repositório GitHub</S.A></S.P>
                    </S.Content>
                </S.Project>
                <S.Project>
                    <S.Img src={Todolist} alt='Portflow' />
                    <S.Content>
                        <S.H2>To Do List</S.H2>
                        <S.P><S.A href="https://to-do-list-dwmedeiros.netlify.app/" target="_blank" rel="noreferrer">Site</S.A></S.P>
                        <S.P><S.A href="https://github.com/dwmedeirosDev/React-Challenge-08" target="_blank" rel="noreferrer">Repositório GitHub</S.A></S.P>
                    </S.Content>
                </S.Project>
            </S.All>
            <Footer />
        </S.ContainerProjects>
    )
}