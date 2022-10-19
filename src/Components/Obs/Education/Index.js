import React from 'react'
import * as S from './Style'

export default function Education(){
    return(
        <section>  
            <S.Content>
                <S.Img src={Upa} alt="UPA"/>
                <S.H1>Saúde e Bem-Estar</S.H1>
                <S.Text>
                    <S.P>1.1 - Melhoria na gestão hospitalar</S.P>
                    <S.P>1.2 - Criação de mais leitos para os pacientes</S.P>
                    <S.P>1.3 - Melhor investigação nos sintomas do paciente</S.P>
                    <S.P>1.4 - Maior agilidade na passagem de plantão</S.P>
                </S.Text>
            </S.Content>
        </section>
    )
}