
import { Container, ContainerScrool } from '../../components/Container/Style';
import { LabelText } from '../../components/LabelText/Style';
import { MapClinic } from '../../components/MapClinic/Styles';
import { SubTitle } from '../../components/Subtitle/Style';
import { Title } from '../../components/Title/Style';
import { UserProfileInput, UserProfileInputAddress, UserProfileInputContainer, UserProfileInputContainerAddress, UserProfileInputContainerRow } from '../../components/UserProfileInput/UserProfileInput';




export const Paciente_Consultar_Local = () => {

    return (
        <ContainerScrool>
            <Container>
                <MapClinic source={require('../../assets/map-clinic.png')} />
                <Title>Clínica Natureh</Title>
                <SubTitle>São Paulo, SP</SubTitle>

                <UserProfileInputContainer>
                    <LabelText>Endereço</LabelText>
                    <UserProfileInput>Rua Vicenso Silva, 987</UserProfileInput>
                </UserProfileInputContainer>

                <UserProfileInputContainerRow>
                    <UserProfileInputContainerAddress>
                        <LabelText>Número</LabelText>
                        <UserProfileInputAddress>578</UserProfileInputAddress>
                    </UserProfileInputContainerAddress>

                    <UserProfileInputContainerAddress>
                        <LabelText>Bairro</LabelText>
                        <UserProfileInputAddress>Moema-SP</UserProfileInputAddress>
                    </UserProfileInputContainerAddress>
                </UserProfileInputContainerRow>


            </Container>
        </ContainerScrool>

    );

}