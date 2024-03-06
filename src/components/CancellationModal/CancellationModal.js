import { Modal } from "react-native";
import { Title } from "../Title/Style";

import { ModalContent, ModalText, PatientModal } from "./Style";
import { ButtonModal, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style";

const CancellationModal = ({visible, setShowModalCancel, ...rest}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
            <Title>Cancelar consulta</Title>

            <ModalText>
                    Ao Cancelar essa consulta, abrira uma possivel disponibilidade no
                    seu horario, deseja mesmo cancelar essa consulta?

            </ModalText>

            
                <ButtonModal>
                <ButtonTitle>
                    Confirmar
                </ButtonTitle>
                </ButtonModal>
                
                <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                <ButtonSecondaryTitle>
                    Cancelar
                </ButtonSecondaryTitle>
            </ButtonSecondary>
            </ModalContent>
            </PatientModal>
        </Modal>
    );
};

export default CancellationModal;