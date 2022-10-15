import styled from 'styled-components'

export const ContainerObs = styled.section` 
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Ubuntu', sans-serif;
`

export const Logo = styled.img`
    margin: 5vh;
    width: 150px;
`

export const H1 = styled.h1`
    text-align: center;
    font-size: 2rem;
    width: 100%;
`

export const P = styled.p`
    margin-top: 4vh;
    width: 80%;
    padding: 2vh;
    text-align: center;
    font-weight: lighter;
`

export const Mural = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const Img = styled.img`
    width: 200px;
    padding: 2vh;
    border-radius: 30px;
    transition: 0.1s all;

    &:hover{
        transform: scale(1.1);
    }
`