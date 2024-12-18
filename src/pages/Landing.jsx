import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addEvent, getEvent } from '../services/allApi';

import CardDetails from '../components/CardDetails';
import { Link } from 'react-router-dom';
import HomeCalender from '../components/HomeCalender';







function Landing() {

    

    const [eventDetails, setEventDetails] = useState({ eventName: '', eventPlace: '', eventDate: '', eventStartTime: '', eventEndsTime: '', })
    const [allEvents, setAllEvents] = useState([])
    const [show, setShow] = useState(false);
    const [monthfromEvnt, setMonthFromEvnt] = useState('')
    const [yearfromEvnt, setYearFromEvnt] = useState('')
    const [dayfromEvnt, setDayFromEvnt] = useState('')


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    useEffect(() => {
        getAllEvents()
    })


    // get event from server
    const getAllEvents = async () => {
        try {
            const reslt = await getEvent()
            if (reslt.status >= 200 && reslt.status < 300) {

                setAllEvents(reslt.data)
            }
        } catch (err) {
            console.log(err)
        }
    }



    // when add event details
    const hanldeAddEvent = async () => {

        const { eventName, eventPlace, eventDate, eventStartTime, eventEndsTime } = eventDetails
        console.log(eventDate)
        if (eventName && eventPlace && eventDate && eventStartTime && eventEndsTime) {
            console.log('success')


            try {

                const res = await addEvent(eventDetails)

                handleClose()

            } catch (err) {
                console.log(err)
            }

        } else {
            alert('enter all fields')
        }

    }


    // extract day month yaer
    const handldate = (evDate) => {

        console.log(evDate)
        console.log('evDate')
        const datex = new Date(evDate)

        let mnth = datex.toLocaleString('default', { month: 'short' });
        console.log(mnth)
        let yar = datex.getFullYear()
        console.log(yar)
        let days = datex.getDate()
        console.log(days)

        setMonthFromEvnt(mnth)
        setYearFromEvnt(yar)
        setDayFromEvnt(days)

        setEventDetails({ ...eventDetails, eventDate: evDate })

        console.log(monthfromEvnt)
        console.log(yearfromEvnt)
        console.log(dayfromEvnt)

        // setEventDetails((previosState) => ({
        //     ...previosState,
        //     eventDate: [
        //         {
        //           ...previosState.eventDate[0], // Access the first object in the array
        //           monthh: mnth,
        //           day: days,
        //           year: yar,
        //         },
        //       ],
        // }))




    }


   

    return (

        <>


            <Container >


                <Row >


                    <Col lg={8} >
                        <Row className='d-flex justify-content-center align-items-center text-center'>
                            {/* <Col><div> <h2>Events</h2></div></Col> */}
                            <Col className=' d-flex justify-content-start align-items-center'>
                                <h5>Create Event  <Button variant="outline-dark" onClick={handleShow} className=' pt-1'>
                                    <span> <i class="fa-solid fa-plus"></i></span>
                                </Button>
                                </h5>
                            </Col>


                        </Row>

                        <Row className='d-flex justify-content-center align-items-center text-center'>
                           

                                {
                                    allEvents.length > 0 ?
                                        allEvents?.map((eventsEach,index) => (
                                            <Col xs={12} // Full-width on extra small screens
                                            sm={6} // Half-width on small screens
                                            md={4} // Third-width on medium screens
                                            lg={4} // Quarter-width on large screens
                                            key={index}
                                            className="mb-4">
                                                <CardDetails eventsEach={eventsEach} />
                                            </Col>




                                        ))
                                        :
                                        <p className='text-danger'>text danger</p>
                                }

                            


                        </Row>

                    </Col>
                    <Col lg={4} className='d-flex  p-2 mt-5' style={{ marginTop: '10px' }}>
                        {/* <Calendr allEvents={allEvents}/> */}
                       <HomeCalender/>
                        {/* <Link to='/calender'><Button className='m-2' variant="primary">View your events by calender</Button></Link> */}
                    </Col>
                    {/* <Link to={`/FirstPage`}>lkm</Link> */}
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
                            label="Location"
                            className="mb-3"
                        >
                            <Form.Control onChange={(e) => setEventDetails({ ...eventDetails, eventPlace: e.target.value })} type='text' placeholder="Event Category" />
                        </FloatingLabel>

                        {/* event date */}
                        <FloatingLabel className="mb-3">
                            <Form.Control onChange={(e) => handldate(e.target.value)} type='date' placeholder="Event Category" />
                        </FloatingLabel>

                        {/*start time */}
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