

import { Container, ContainerScrool } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
import CalendarList from "../../components/Calendar/Calendar";
import { FilterAppointment } from "./Style";
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment";
import { useState } from "react";
import { ListComponent } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import CancellationModal from "../../components/CancellationModal/CancellationModal";
import InserctionModal from "../../components/InserctionModal/InsertModal";
import SchedulingModal from "../../components/SchedulingModal/SchedulingModal";


const Consultas = [
    { id: 1, nome: "Marcio", situacao: "pendente" },
    { id: 2, nome: "Marcio", situacao: "realizado" },
    { id: 3, nome: "Marcio", situacao: "cancelado" },
    { id: 4, nome: "Marcio", situacao: "realizado" },
    { id: 5, nome: "Marcio", situacao: "cancelado" },
  ];



export const Medico_Consulta = () => {
    const [statusLista, setStatusLista] = useState("pendente")

    // State para os modais
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowAppointment] = useState(false);


    return (
        <ContainerScrool>
            <Container>

                {/* Header */}
                <Header />

                {/* Calendario */}
                <CalendarList />

                {/* Container */}
                <FilterAppointment>

                    {/* Botão agendado */}
                    <AbsListAppointment
                        textButton={"Agendadas"}
                        clickButton={statusLista === "pendente"}
                        onPress={() => setStatusLista("pendente")}
                    />

                    {/* Botão realizado */}
                    <AbsListAppointment
                        textButton={"Realizadas"}
                        clickButton={statusLista === "realizado"}
                        onPress={() => setStatusLista("realizado")}
                    />

                    {/* Botão cancelado */}
                    <AbsListAppointment
                        textButton={"Canceladas"}
                        clickButton={statusLista === "cancelado"}
                        onPress={() => setStatusLista("cancelado")}
                    />

                </FilterAppointment>


                {/* Cards */}
                {/* Lista (FlatList) */}
                <ListComponent
                    data={Consultas}
                    keyExtractor={(item) => item.id}

                    renderItem={({ item }) =>
                        statusLista == item.situacao && (
                            <AppointmentCard
                                situacao={item.situacao}
                                onPressCancel={() => setShowModalCancel(true)}
                                onPressAppointment={() => setShowAppointment(true)}
                                onPressScheduling={() => setShowScheduling(true)}
                            />
                        )
                    }
                />

                {/* <CancellationModal
                    visible={showModalCancel}
                    setShowModalCancel={setShowModalCancel}
                /> */}
                <InserctionModal
                    visible={showModalAppointment}
                    setShowAppointment={setShowAppointment}
                />
                <SchedulingModal
                    visible={showModalCancel}
                    setShowModalCancel={setShowModalCancel}
                />







            </Container>

        </ContainerScrool>


    );

}