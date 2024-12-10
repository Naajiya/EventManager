import React, { useEffect } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, Row } from 'react-bootstrap'
import { deletEvent } from '../services/allApi';




function CardDetails({ eventsEach }) {
    const dateObj = new Date(eventsEach.eventDate);
    const day = dateObj.getDate() + 1
    const month = dateObj.toLocaleDateString("default", { month: "short" })





    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            click
        </Tooltip>
    );


    const handleDelete = async (eventId) => {
        try {
            await deletEvent(eventId)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

    }, [])





    return (
        <>
            <Row className='d-flex'>
                <Col lg={3} className="mb-3 mt-4">




                    <Card className="border rounded-4 bg-secondary shadow " style={{ width: '11rem' }}>
                        <div className='d-flex justify-content-between w-100 text-secondary-emphasis bg-light rounded-5 mt-1' >

                            <div onClick={() => handleDelete(eventsEach.id)} className='ms-3 mt-2'>
                                <i class="fa-solid fa-trash"></i>
                            </div>

                            <Link to={`/EditEvent/${eventsEach.id}`}>
                                <div className='me-3 mt-2'>
                                    <i class="fa-solid fa-file-pen"></i>
                                </div>
                            </Link>
                            
                        </div>
                        <Link to={`/viewdetails/${eventsEach.id}`} style={{ textDecoration: 'none' }}>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}>
                                <div className='text-secondary-emphasis'>
                                    <Card.Body>
                                        <Card.Title>{eventsEach.eventName}</Card.Title>
                                        <Card.Text>
                                            {/* <h6>{eventsEach.eventPlace}</h6> */}
                                            <p>{eventsEach.eventStartTime} - {eventsEach.eventEndsTime}</p>
                                        </Card.Text>


                                    </Card.Body>
                                    <Card.Text>
                                        <div className="calender-box ">
                                            <p>{day}</p>
                                            <p className='box-info'>{month}</p>
                                        </div>
                                    </Card.Text>
                                </div>
                            </OverlayTrigger>
                        </Link>



                    </Card>




                </Col>




            </Row>
        </>
    )
}

export default CardDetails