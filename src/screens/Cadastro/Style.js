import { Button, ButtonTitle } from '../../components/Button/Style';
import { Container } from '../../components/Container/Style';
import { Input } from '../../components/Input/Style';
import { LinkCancel } from '../../components/Links/Style';

import { Logo } from '../../components/Logo/Style';
import { SubTitle, SubTitleContainer } from '../../components/Subtitle/Style';
import { Title } from '../../components/Title/Style';
import { ContentAccount } from '../Login/Style';




export const Cadastro = () => {

    return (

        <Container>

            <Logo source={require("../../assets/VitalHub_Logo.png")} />

            <Title>Redefinir senha</Title>

            <SubTitleContainer>
            <SubTitle>Insira e confirme a sua nova senha</SubTitle>
            </SubTitleContainer>
            <Input
                placeholder="Nova Senha"
            />
            <Input
                placeholder="Senha"
            />
            <Input
                placeholder="Confirmar Senha"
            />

            <Button>
                <ButtonTitle>
                    Cadastrar
                </ButtonTitle>
            </Button>

            <ContentAccount>
                <LinkCancel> Cancelar</LinkCancel>
            </ContentAccount>

        </Container>


    );

}