import {
    ModalContainer,
    ModalScheduleView,
    ModalMedicalRecordContainer,
    ModalMedicalRecordView,
    ModalView, ModalScheduleContainer,
    ModalScheduleAppointmentFormContainer,
    ModalConfirmAppointmentContainer,
    ModalConfirmAppointmentContainerLabel,
    ModalConfirmAppointmentContent
} from "./Style";
import { ScheduleAppointmentContainer, ScheduleAppointmentInput } from "../ModalAppointmentInput/Style";
import { SubTitle, SubTitleContainerModal, SubTitleModalConfirm, SubTitleModalConfirmLabel } from "../Subtitle/Style";
import { AppointmentLevelButtonContainer } from "../StatusButton/Style";
import { ButtonEnter, ButtonModalAppointment, ButtonModalConfirmAppointment } from "../Button/Button";
import { AppointmentLevelButton } from "../StatusButton/StatusButton";
import { ButtonSecondary } from "../SecondaryButton/SecondaryButton";
import { UserProfilePhotoModal } from "../UserProfilePhoto/Style";
import { LabelText } from "../LabelText/Style";
import { Title } from "../Title/Style";
import { Modal } from "react-native";
import { useState } from "react";


export const ModalAppointment = ({ id, animation, transparent, visible, onPress, img, name, age, email, situation, ...rest }) => {
    return (
        <Modal {...rest}
            animationType={animation}
            transparent={transparent}
            visible={visible}
        >
            {situation == 'pendente' ? (
                <ModalView>
                    <ModalContainer>
                        <Title>Cancelar Consulta</Title>
                        <SubTitleContainerModal>
                            <SubTitle>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</SubTitle>
                        </SubTitleContainerModal>
                        <ButtonEnter
                            placeholder={'Confirmar'}
                        />
                        <ButtonSecondary
                            onPress={onPress}
                        />
                    </ModalContainer>

                </ModalView>
            ) : (
                <ModalMedicalRecordView>
                    <ModalMedicalRecordContainer>
                        <UserProfilePhotoModal source={img} />
                        <Title>{name}</Title>
                        <SubTitle>{age}   <SubTitle>{email}</SubTitle></SubTitle>
                        <ButtonEnter
                            placeholder={'Confirmar'}
                        />
                        <ButtonSecondary
                            onPress={onPress}
                        />
                    </ModalMedicalRecordContainer>
                </ModalMedicalRecordView>
            )}
        </Modal>
    )
}

export const ModalScheduleAppointment = ({ animation, transparent, visible, onPress, ...rest }) => {
    const [statusAppoinment, setStatusAppoinment] = useState("");
    return (
        <Modal {...rest}
            animationType={animation}
            transparent={transparent}
            visible={visible}
        >
            <ModalScheduleView>
                <ModalScheduleContainer>
                    <Title>Agendar consulta</Title>

                    <ModalScheduleAppointmentFormContainer>
                        <ScheduleAppointmentContainer>
                            <LabelText>Qual o nível da consulta</LabelText>
                            <AppointmentLevelButtonContainer>
                                <AppointmentLevelButton
                                    textButton={'Rotina'}
                                    clickButton={statusAppoinment === "Rotina"}
                                    onPress={() => setStatusAppoinment("Rotina")}
                                />

                                <AppointmentLevelButton
                                    textButton={'Exame'}
                                    clickButton={statusAppoinment === "Exame"}
                                    onPress={() => setStatusAppoinment("Exame")}
                                />

                                <AppointmentLevelButton
                                    textButton={'Urgência'}
                                    clickButton={statusAppoinment === "Urgencia"}
                                    onPress={() => setStatusAppoinment("Urgencia")}
                                />
                            </AppointmentLevelButtonContainer>
                        </ScheduleAppointmentContainer>

                        <ScheduleAppointmentContainer>
                            <LabelText>informe a localização desejada</LabelText>
                            <ScheduleAppointmentInput
                                placeholder={'Informe a localização'}
                            />
                        </ScheduleAppointmentContainer>
                        <ButtonModalAppointment
                            placeholder={'confirmar'}
                        />
                    </ModalScheduleAppointmentFormContainer>


                    <ButtonSecondary
                        onPress={onPress}
                    />
                </ModalScheduleContainer>
            </ModalScheduleView>
        </Modal>
    )
}

export const ModalConfirmAppointment = ({ animation, transparent, visible, onPressCancel, onPressConfirm }) => {
    return (
        <Modal
            animationType={animation}
            transparent={transparent}
            visible={visible}>
            <ModalView>
                <ModalConfirmAppointmentContainer>
                    <Title>Agendar consulta</Title>
                    <SubTitleModalConfirm>Consulte os dados selecionados para a sua consulta</SubTitleModalConfirm>

                    <ModalConfirmAppointmentContent>
                        <ModalConfirmAppointmentContainerLabel>
                            <LabelText>Data da consulta</LabelText>
                            <SubTitleModalConfirmLabel>1 de Novembro de 2023</SubTitleModalConfirmLabel>
                        </ModalConfirmAppointmentContainerLabel>

                        <ModalConfirmAppointmentContainerLabel>
                            <LabelText>Médico(a) da consulta</LabelText>
                            <SubTitleModalConfirmLabel>Dra Alessandra</SubTitleModalConfirmLabel>
                            <SubTitleModalConfirmLabel>Demartologa, Esteticista</SubTitleModalConfirmLabel>
                        </ModalConfirmAppointmentContainerLabel>

                        <ModalConfirmAppointmentContainerLabel>
                            <LabelText>Local da consulta</LabelText>
                            <SubTitleModalConfirmLabel>São Paulo, SP</SubTitleModalConfirmLabel>
                        </ModalConfirmAppointmentContainerLabel>

                        <ModalConfirmAppointmentContainerLabel>
                            <LabelText>Tipo da consulta</LabelText>
                            <SubTitleModalConfirmLabel>Rotina</SubTitleModalConfirmLabel>
                        </ModalConfirmAppointmentContainerLabel>
                    </ModalConfirmAppointmentContent>

                    <ButtonModalConfirmAppointment
                        onPress={onPressConfirm}
                        placeholder={'confirmar'}
                    />

                    <ButtonSecondary
                        onPress={onPressCancel}
                    />
                </ModalConfirmAppointmentContainer>
            </ModalView>
        </Modal>
    )
}
