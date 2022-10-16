import React from 'react'
import * as S from './Style'
import Header from '../../Services/Header/Index'
import Linkedin from '../../Assets/Social-Media/linkedin.png'
import Whatsapp from '../../Assets/Social-Media/whatsapp.png'
import GitHub from '../../Assets/Social-Media/github.png'
import Photo5 from '../../Assets/Photos/photo5.png'

export default function Home(){
    return(
        <S.ContainerHome>
            <Header />
            <S.All>
                <S.Content>
                    <S.Text>
                        <S.H1>Bem vindo ao meu Portfólio</S.H1>
                        <S.H3>Minhas Redes Sociais:</S.H3>
                        <S.SMBox>
                            <a href='https://www.linkedin.com/in/dwmedeiros/' target='_blank'><S.SM src={Linkedin} alt='LinkedIn'/></a>
                            <a href='https://wa.me/5521982916500' target='_blank'><S.SM src={Whatsapp} alt='Whatsapp'/></a>
                            <a href='https://github.com/dwmedeirosDev' target='_blank'><S.SM src={GitHub} alt='GitHub'/></a>  
                        </S.SMBox>
                    </S.Text>
                </S.Content>
                <S.Box>
                    <S.Photo src={Photo5} alt='Minha foto - David'/>
                </S.Box>
            </S.All>
        </S.ContainerHome>
    )
}