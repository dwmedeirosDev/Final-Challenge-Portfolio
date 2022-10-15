import styled, {keyframes} from 'styled-components'

const blinkCursor = keyframes`
    from{
        border-right-color: rgba(255, 255, 255, 0.75);
    }

    to{
        border-right-color: transparent;
    }
`

const typing = keyframes`
    from{
        width: 0;
    }
    
    to{
        width: 14em;
    }
`

export const ContainerWelcome = styled.section`
    border: solid;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(25, 25, 25);
`

export const H1 = styled.h1`
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    color: rgba(255, 255, 255, .75);
    font-family: 'Special Elite', cursive;
    font-size: 3em;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;

    animation: ${blinkCursor} 500ms steps(40) infinite normal;
    animation: ${typing} 4s steps(40) 1s normal both;
`