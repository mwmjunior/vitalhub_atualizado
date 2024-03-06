import { Button, ButtonGoogle, ButtonTitleGoogle } from '../../components/Button/Style';
import { Container } from '../../components/Container/Style';
import { Logo } from '../../components/Logo/Style';
import { Title } from '../../components/Title/Style';
import { Input } from '../../components/Input/Style';
import { LinkBold, LinkMedium } from '../../components/Links/Style';
import { ButtonTitle } from '../../components/Button/Style';
import { AntDesign } from '@expo/vector-icons';
import { ContentAccount, TextContentAccount } from './Style';


export const Login = ({navigation}) => {

    async function Login () {
        navigation.navigate("Main")
    }



    return (

        <Container>

            <Logo source={require("../../assets/VitalHub_Logo.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuario ou E-mail"
            />


            <Input
                placeholder="Senha"
                secureTextEntry
            />

            <LinkMedium>Esqueceu sua senha ?</LinkMedium>

            <Button onPress = { () => Login()}>
                <ButtonTitle>
                    Entrar
                </ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTitleGoogle>
                    Entrar com google
                </ButtonTitleGoogle>
            </ButtonGoogle>


            <ContentAccount>
                <TextContentAccount>
                    Não tem conta? 
                    <LinkBold>  Crie uma conta agora!</LinkBold>
                </TextContentAccount>
            </ContentAccount>

        </Container>


    );

}