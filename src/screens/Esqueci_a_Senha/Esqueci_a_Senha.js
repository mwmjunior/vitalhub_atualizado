import { Button, ButtonTitle } from '../../components/Button/Style';
import { Container } from '../../components/Container/Style';
import { Input } from '../../components/Input/Style';
import { LinkCancel } from '../../components/Links/Style';

import { Logo } from '../../components/Logo/Style';
import { SubTitle, SubTitleContainer } from '../../components/Subtitle/Style';
import { Title } from '../../components/Title/Style';
import { ContentAccount } from '../Login/Style';




export const Esqueci_a_Senha = () => {

    return (

        <Container>

            <Logo source={require("../../assets/VitalHub_Logo.png")} />

            <Title>Recuperar senha</Title>

            <SubTitleContainer>
            <SubTitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</SubTitle>
            </SubTitleContainer>
            <Input
                placeholder="Usuario ou E-mail"
            />

            <Button>
                <ButtonTitle>
                    Entrar
                </ButtonTitle>
            </Button>

            <ContentAccount>
                <LinkCancel> Cancelar</LinkCancel>
            </ContentAccount>

        </Container>


    );

}