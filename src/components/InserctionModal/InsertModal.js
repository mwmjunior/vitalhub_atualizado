import { Modal } from "react-native";


import { ModalContent, PatientModal, PatientPhoto, SubTitle, TitleModal, ViewSubTitles } from "./Style";
import { ButtonModal, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style";

const InserctionModal = ({visible, setShowAppointment, ...rest}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>

                <PatientPhoto
            source={require("../../assets/Men.png")}
          />
            <TitleModal>Niccole Sarga</TitleModal>
          
            <ViewSubTitles>
            <SubTitle>22 anos</SubTitle>
            <SubTitle>niccole.sarga@gmail.com</SubTitle>
          </ViewSubTitles>
            
                <ButtonModal>
                <ButtonTitle>
                    Inserir Prontuário
                </ButtonTitle>
                </ButtonModal>
                
                <ButtonSecondary onPress={() => setShowAppointment(false)}>
                <ButtonSecondaryTitle>
                    Cancelar
                </ButtonSecondaryTitle>
            </ButtonSecondary>
            </ModalContent>
            </PatientModal>
        </Modal>
    );
};

export default InserctionModal;