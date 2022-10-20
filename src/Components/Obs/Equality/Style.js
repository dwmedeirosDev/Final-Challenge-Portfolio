import styled from 'styled-components'

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Ubuntu', sans-serif;
`

export const Close = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 32px;
    cursor: pointer;
    display: flex;
    justify-content: end;

    &:before, &:after{
        content: '';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: white;
    }

    &:before{
        transform: rotate(45deg);

    }

    &:after{
        transform: rotate(-45deg);
        
    }
`

export const Img = styled.img`
    margin: 3%;
    width: 500px;
    border-radius: 10px;

    @media only screen and (min-width: 375px) and (max-width: 620px){
        width: 100%;
    }
`

export const H1 = styled.h1`
    margin: 20px;
    color: white;
`

export const P = styled.p`
    margin-bottom: 0.3%;
    font-weight: lighter;
    color: white;
`