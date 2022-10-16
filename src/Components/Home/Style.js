import styled from 'styled-components'
import Background from '../../Assets/Background/background.jpg'

export const ContainerHome = styled.section`
    background-image: url(${Background});
    font-family: 'Ubuntu', sans-serif;
`

export const All = styled.div`
    width: 100%;
    height: 79vh;
    display: flex;

    @media only screen and (min-width: 375px) and (max-width: 815px){
        flex-direction: column;
        height: 95vh;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    @media only screen and (min-width: 375px) and (max-width: 815px){
        align-items: center;
        padding-top: 10%;
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const H1 = styled.h1`
    color: white;
    font-size: 1.8rem;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const H3 = styled.h1`
    color: white;
    font-weight: lighter;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SMBox = styled.div`
    width: 250px;
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    @media only screen and (min-width: 375px) and (max-width: 815px){
        justify-content: center;
    }
`

export const SM = styled.img`
    width: 50px;
    transition: all 0.1s;

    &:hover{
        transform: scale(1.1);
    }
`

export const Photo = styled.img`
    width: 300px;
    border-radius: 10px;
    margin-left: 10%;

    @media only screen and (min-width: 375px) and (max-width: 815px){
        margin-left: 0;
        padding-top: 10%;
        border-radius: 10px;
    }
`