import styled from 'styled-components'
import Background from '../../Assets/Background/background.jpg'

export const ContainerProjects = styled.section`
    background-image: url(${Background});
    font-family: 'Ubuntu', sans-serif;
    height: 145.5vh;
`

export const All = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 40px;
`

export const Project = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 40px;
`

export const Img = styled.img`
    width: 500px;
    border-radius: 40px;
    border: solid 1px white;
`

export const Content = styled.div`
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 5%;
`

export const H2 = styled.h2`
    font-size: 2rem;
`

export const P = styled.p`
    margin-left: 40px;
    border: solid 1px white;
    padding: 10px;
    font-weight: lighter;
    transition: all 0.1s;

    &:hover{
        transform: scale(1.1);
    }
`

export const A = styled.a`
    text-decoration: none;
    color: white;
`