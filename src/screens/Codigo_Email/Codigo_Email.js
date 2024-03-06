import { Button, ButtonTitle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { LinkCancel } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { SubTitle, SubTitleContainer, SubTitleMail } from "../../components/Subtitle/Style";
import { Title } from "../../components/Title/Style";
import { ContentAccount } from "../Login/Style";
import CodeInput from "./CodeInput"; // Remova as chaves aqui


export const Codigo_Email = () => {

    return (

        <Container>

            <Logo source={require("../../assets/VitalHub_Logo.png")} />

            <Title>Recuperar senha</Title>

            <SubTitleContainer>
            <SubTitle> Digite o código de 4 dígitos enviado para{' '}
                    <SubTitleMail>username@email.com</SubTitleMail></SubTitle>
            </SubTitleContainer>
            <CodeInput />
            <Button>
                <ButtonTitle>
                    Entrar
                </ButtonTitle>
            </Button>

            <ContentAccount>
                <LinkCancel> Reenviar Código</LinkCancel>
            </ContentAccount>

        </Container>


    );

}
