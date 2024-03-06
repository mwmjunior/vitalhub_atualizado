import { ButtonEnter } from '../../components/Button/Button';
import React, { useState } from 'react';
import { CalendarSchedule } from '../../components/CalendarSchedule/CalendarSchedule';
import { Container } from '../../components/Container/Style';
import { ModalConfirmAppointment } from '../../components/Modal/Modal';
import { SelectInputPicker } from '../../components/SelectInput/SelectInput';
import { Title } from '../../components/Title/Style';
import { ButtonSecondary } from '../../components/SecondaryButton/SecondaryButton';



export const Paciente_Selecionar_Data = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <Container>
            <Title>Selecionar Clínica</Title>

            <CalendarSchedule />

            <SelectInputPicker
                textLabel={'Selecione um horário disponível'}
                textInput={'Selecionar horário'}
            />


            <ButtonEnter
                onPress={() => setModalVisible(true)}
                placeholder={'confirmar'}
            />

            <GenericPrescriptionInput
                textLabel={'Prescrição médica'}
                placeholder={`Nenhuma foto informada`}
            />

            <ButtonSecondary />
        </Container>
    );
}
