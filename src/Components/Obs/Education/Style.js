import styled from 'styled-components'

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Ubuntu', sans-serif;
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
`

export const Text = styled.div`

`

export const P = styled.p`
    margin-bottom: 0.3%;
    font-weight: lighter;
    color: white;
`