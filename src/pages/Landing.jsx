import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addEvent, getEvent } from '../services/allApi';




function Landing() {

    const [eventDetails, setEventDetails] = useState({ eventName: '', eventPlace: '', eventDate: '', eventStartTime: '', eventEndsTime: '' })
    const [allEvents, setAllEvents] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        getAllEvents()
    })


    // get event from server
    const getAllEvents = async () => {
        try {
            const reslt = await getEvent()
            // console.log('getEvent')
            // console.log(reslt.data)


            if (reslt.status >= 200 && reslt.status < 300) {
                // console.log('yes')
                setAllEvents(reslt.data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    // when add event details
    const hanldeAddEvent = async () => {
        const { eventName, eventPlace, eventDate, eventStartTime, eventEndsTime } = eventDetails
        if (eventName && eventPlace && eventDate && eventStartTime && eventEndsTime) {
            console.log('success')
            try {


                const res = await addEvent(eventDetails)
                handldate(eventDate)
                // console.log(res.data)
                handleClose()



            } catch (err) {
                console.log(err)
            }

        } else {
            alert('enter all fields')
        }

    }

    const handldate = (evDate) => {
        console.log(evDate)
        Month
    }


    return (

        <>


            <Container>

                <Row >


                    <Col lg={8} >
                        <div className='d-flex justify-content-between'>
                            <h2>Events</h2>
                            <h5>Create Event  <Button variant="outline-dark" onClick={handleShow} className='m-2 pt-1'>
                                <i class="fa-solid fa-plus"></i>
                            </Button>
                            </h5>


                        </div>

                        <Row className='d-flex'>

                            {
                                allEvents.length > 0 ?
                                    allEvents?.map(ev => (


                                        <Col lg={4} >
                                            <Card className='border rounded-4 bg-secondary m-2 shadow position-absolute' style={{ width: '12rem' }} >

                                                <Card.Body>
                                                    <Card.Title>{ev.eventName}</Card.Title>
                                                    <Card.Text>
                                                        <h6>{ev.eventPlace}</h6>
                                                        <p>{ev.eventStartTime}-{ev.eventEndsTime}</p>
                                                    </Card.Text>
                                                </Card.Body>

                                                <div className='calender-box shadow'>
                                                    <p>
                                                        JUN
                                                    </p>
                                                    <p style={{ marginTop: '-20px' }}>12</p>

                                                </div>

                                            </Card>

                                        </Col>






                                    ))
                                    :
                                    <p className='text-danger'>text danger</p>
                            }



                        </Row>

                    </Col>
                    <Col lg={4}>
                        
                    </Col>
                </Row>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}

                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {/* event name */}
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Event Name"
                            className="mb-3"
                        >
                            <Form.Control onChange={(e) => setEventDetails({ ...eventDetails, eventName: e.target.value })} type='text' placeholder="Event Name" />
                        </FloatingLabel>

                        {/* event location */}
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Event Category"
                            className="mb-3"
                        >
                            <Form.Control onChange={(e) => setEventDetails({ ...eventDetails, eventPlace: e.target.value })} type='text' placeholder="Event Category" />
                        </FloatingLabel>

                        {/* event date */}
                        <FloatingLabel className="mb-3">
                            <Form.Control onChange={(e) => setEventDetails({ ...eventDetails, eventDate: e.target.value })} type='date' placeholder="Event Category" />
                        </FloatingLabel>

                        {/* time */}
                        <FloatingLabel label='start time' className="mb-3">
                            <Form.Control type='time' onChange={(e) => setEventDetails({ ...eventDetails, eventStartTime: e.target.value })} placeholder="Event Category" />
                        </FloatingLabel>

                        <FloatingLabel label='end time' >
                            <Form.Control type='time' onChange={(e) => setEventDetails({ ...eventDetails, eventEndsTime: e.target.value })} placeholder="Event Category" />
                        </FloatingLabel>

                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="primary" onClick={hanldeAddEvent}>add</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    )
}

export default Landing