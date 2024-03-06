import { Button, ButtonTitle } from '../../components/Button/Style';
import { Container, ContainerScrool } from '../../components/Container/Style';
import { Men } from '../../components/Images/Style';
import { Input, InputLarger } from '../../components/Input/Style';
import { LinkCancel } from '../../components/Links/Style';
import { ContentAccount } from '../Login/Style';




export const Medico_Insercao_Prontuario = () => {

    return (
<ContainerScrool>
        <Container>

            <Men source={require("../../assets/Men.png")} />

            
            <InputLarger
                textLabel="Informe o CEP:"
                placeholder="Descrição"
            />
            <Input
                placeholder="Diagnóstico"
            />
            <InputLarger
                placeholder="Prescrição medica"
            />

            <Button>
                <ButtonTitle>
                    Salvar
                </ButtonTitle>
            </Button>

            <ContentAccount>
                <LinkCancel> Cancelar</LinkCancel>
            </ContentAccount>

        </Container>
        </ContainerScrool>

    );

}