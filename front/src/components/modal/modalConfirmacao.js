import Modal from "react-bootstrap/Modal"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import brLocale from '@fullcalendar/core/locales/pt-br';


function ModalConfirmacao() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr);
    }

    // TODO: consultar do back-end
    const agendamentos = [
        { title: "evento 1", date: "2023-11-13T13:00:00" },
        { title: "evento 2", date: "2023-11-14T09:00:00" },
    ]

    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                Buscar Horário
            </Button>

            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
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
                    <Button variant="primary" onClick={handleClose}>
                        Agendar
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
export default ModalConfirmacao;