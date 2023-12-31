import Modal from "react-bootstrap/Modal"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import brLocale from '@fullcalendar/core/locales/pt-br';
import RestApiService from "../../services/restApiService";
import { useEffect } from 'react';

function ModalConfirmacao(props) {
    const [show, setShow] = useState(false);
    const [agendamentos, setAgendamentos] = useState([]);
    const [agendamento, setAgendamento] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const idEspecialidade = props.dados.idEspecialidade;
    const idPaciente = props.dados.idPaciente;
    const idDentista = props.dados.idDentista;

    const handleDateClick = (arg) => { // bind with an arrow function
        setAgendamentos([...agendamentos, { title: "ocupado", date: arg.dateStr }]);
        setAgendamento({
            id_especialidade: idEspecialidade,
            id_paciente: idPaciente,
            id_dentista: idDentista,
            data: arg.dateStr
        });
    }

    const handleButtonClick = async (arg) => {
        const api = new RestApiService(`http://localhost:8000/dentistas/${idDentista}/agendamentos`);
        await api.createAsync(agendamento);
        alert(`Agendado para ${agendamento.data} com sucesso!`);
        setShow(false);
    }

    useEffect(() => {
        async function getAllAgendamentos() {
            if (idDentista === null || idDentista === "")
                return;
            const api = new RestApiService(`http://localhost:8000/dentistas/${idDentista}/agendamentos`);
            let response = await api.getAllAsync();
            let eventos = response.map((e,i) => ({ title: "ocupado", date: e.data }));
            setAgendamentos(eventos);
        }
        getAllAgendamentos();
    }, [ idDentista ]);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Buscar Horário
            </Button>

            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Horários Disponíveis</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FullCalendar
                        plugins={[timeGridPlugin, interactionPlugin]}
                        locale={brLocale}
                        height="auto"
                        initialView="timeGridWeek"
                        slotMinTime="09:00"
                        slotMaxTime= "18:00"
                        businessHours= {[
                            {
                                // Segunda, Terça, Quarta, Quinta, Sexta
                                daysOfWeek: [ 1, 2, 3, 4, 5 ],
                                startTime: '09:00',
                                endTime: '18:00'
                            }
                        ]}
                        allDaySlot= {false}
                        eventTimeFormat={{
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false
                        }}
                        slotLabelFormat={{
                            hour: 'numeric',
                            minute: '2-digit',
                            hour12: false
                        }}
                        headerToolbar= {{
                            left: 'prev,next',
                            center: 'title',
                            right: 'timeGridWeek,timeGridDay' // user can switch between the two
                        }}
                        weekends={false}
                        events={agendamentos}
                        dateClick={handleDateClick}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleButtonClick}>
                        Agendar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalConfirmacao;
