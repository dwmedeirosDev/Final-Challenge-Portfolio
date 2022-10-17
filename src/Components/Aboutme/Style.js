import styled from 'styled-components'
import Background from '../../Assets/Background/background.jpg'

export const ContainerAboutMe = styled.section`
    background-image: url(${Background});
    font-family: 'Ubuntu', sans-serif;
`

export const All = styled.div`
    width: 100%;
    height: 79vh;
    display: flex;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const H2 = styled.h2`
    color: white;
    font-size: 1.8rem;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const P = styled.p`
    color: white;
    font-weight: lighter;
    width: 80%;
    height: 10vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4vh;
`

export const Skills = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

export const ContainerLanguage = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    margin: 5px;
    transition: all 0.1s;

    &:hover{
        transform: scale(1.1);
    }
`

export const LanguageImg = styled.img`
    width: 50px;
`

export const H6 = styled.h6`
    color: white;
    margin-left: 10px;
    font-size: 1rem;
`

export const Box = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`

export const Photo = styled.img`
    width: 300px;
    height: 430px;
    object-fit: contain;
`