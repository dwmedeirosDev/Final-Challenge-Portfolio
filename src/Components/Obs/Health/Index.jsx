import React from 'react'
import * as S from './Style'
import Upa from '../../../Assets/Obs/upa.png'

export default function Health({Close}){
    return(
            <S.Content>
                <S.Close onClick={Close}/>
                <S.Img src={Upa} alt="UPA"/>
                <S.H1>Saúde e Bem-Estar</S.H1>
                <div>
                    <S.P>1.1 - Melhoria na gestão hospitalar</S.P>
                    <S.P>1.2 - Criação de mais leitos para os pacientes</S.P>
                    <S.P>1.3 - Melhor investigação nos sintomas do paciente</S.P>
                    <S.P>1.4 - Maior agilidade na passagem de plantão</S.P>
                </div>
            </S.Content>  
    )
}