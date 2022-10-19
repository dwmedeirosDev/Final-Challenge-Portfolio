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

    @media only screen and (min-width: 375px) and (max-width: 1010px){
        flex-direction: column;
        height: 160vh;
        padding-top: 10%;
    }
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

    @media only screen and (min-width: 375px) and (max-width: 608px){
        padding-top: 70px;
    }
`

export const Skills = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    @media only screen and (min-width: 375px) and (max-width: 638px){
        flex-direction: column;
        align-items: center;
        padding-top: 70px;

    }
`

export const ContainerLanguage = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    margin: 5px;
    transition: all 0.1s;
    cursor: pointer;

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

    @media only screen and (min-width: 375px) and (max-width: 1010px){
        width: 100%;
        justify-content: center;
        padding-top: 10%
    }
`

export const Photo = styled.img`
    width: 300px;
    height: 430px;
    object-fit: contain;
`