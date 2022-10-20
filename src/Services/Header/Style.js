import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerHeader = styled.section`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 375px) and (max-width: 815px){
        flex-direction: column;
        align-items: center;
        height: 20vh;
        justify-content: space-evenly;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    margin-left: 7%;
    color: #f3f3f3;

    @media only screen and (min-width: 375px) and (max-width: 815px){
        margin-left: 0;
        width: 100%;
        justify-content: center;
    }
`

export const H1 = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 2rem;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 60%;

    @media only screen and (min-width: 375px) and (max-width: 815px){
        width: 100%;
        justify-content: center;
    }
`

export const SLink = styled(Link)`
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 10px;
    margin-right: 5%;
    color: white;
    position: relative;
    text-decoration: none;
    font-weight: lighter;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color: #f3f3f3;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }

    &:hover:before {
        transform-origin: left;
        transform: scaleX(1);
    }

    @media only screen and (min-width: 375px) and (max-width: 815px){
        margin-right: 0;
    }
`