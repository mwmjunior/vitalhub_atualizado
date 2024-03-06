import { Button, ButtonTitle } from '../../components/Button/Style';
import { ClinicCardList } from '../../components/CardList/CardList';
import { Container } from '../../components/Container/Style';
import { LinkCancel } from '../../components/Links/Style';
import { Title } from '../../components/Title/Style';
import { ContentAccount } from '../Login/Style';

const clinicCards = [
    { id: 1, clinicName: 'Clínica Natureh', score: '4,5', city: 'São Paulo', uf: 'SP', days: 'Seg-Sex', select: true },
    { id: 2, clinicName: 'Diamond Pró-Mulher', score: '4,8', city: 'São Paulo', uf: 'SP', days: 'Seg-Sex', select: false },
    { id: 3, clinicName: 'Clínica Villa Lobos', score: '4,2', city: 'Taboão', uf: 'SP', days: 'Seg-Sab', select: false },
    { id: 4, clinicName: 'SP Oncologia Clínica', score: '4,2', city: 'Taboão', uf: 'SP', days: 'Seg-Sab', select: false },
]

export const Paciente_Selecionar_Clinica = () => {
    return (
        <Container>
            <Title>Selecionar Clínica</Title>
            
            <ClinicCardList 
                cardsData={clinicCards}
            />

            <Button>
                <ButtonTitle>
                    Cadastrar
                </ButtonTitle>
            </Button>

            <ContentAccount>
                <LinkCancel>Cancelar</LinkCancel>
            </ContentAccount>
        </Container>
    );
}
