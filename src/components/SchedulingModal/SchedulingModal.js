import { Modal } from "react-native";
import { Title } from "../Title/Style";


import { InlineInputsContainer, InputsRow, ModalContent, ModalText, PatientModal } from "./Style";
import { ButtonModal, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style";
import { Input, InputSmall } from "../Input/Style";
import { Label } from "../Label/Label";

const SchedulingModal = ({ visible, setShowModalCancel, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <Title>Agendar consulta</Title>


                    <InlineInputsContainer>
                        <Label textLabel="Qual o nível da consulta" />
                        <InputsRow>
                            <InputSmall
                                placeholder="Rotina"
                            />
                            <InputSmall
                                placeholder="Rotina"
                            />
                            <InputSmall
                                placeholder="Rotina"
                            />
                        </InputsRow>
                    </InlineInputsContainer>



                    {/* Input simples */}
                    <Label textLabel="Informe a localização desejada" />
                    <Input
                        placeholder="Informe a localização"
                    />


                    <ButtonModal>
                        <ButtonTitle>
                            Continuar
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

export default SchedulingModal;