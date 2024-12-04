import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap'

function CardDetails({ eventsEach }) {
    console.log(eventsEach)
    console.log('eventsEach')

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            click 
        </Tooltip>
    );

    return (
        <>
            <Row className='d-flex'>
                <Col lg={3} className="mb-3 mt-4">

                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <Link to={`/viewdetails/${eventsEach.id}`} style={{ textDecoration: 'none' }}>
                        
                            <Card className="border rounded-4 bg-secondary shadow " style={{ width: '12rem' }}>
                            <div className='d-flex justify-content-between w-100 text-secondary-emphasis'>
                                   <div className='ms-3 mt-2'><i class="fa-solid fa-trash"></i></div>
                                   <div className='me-3 mt-2'><i class="fa-solid fa-file-pen"></i></div>
                                </div>
                                <Card.Body>
                                    <Card.Title>{eventsEach.eventName}</Card.Title>
                                    <Card.Text>
                                        <h6>{eventsEach.eventPlace}</h6>
                                        <p>{eventsEach.eventStartTime} - {eventsEach.eventEndsTime}</p>
                                    </Card.Text>
                                </Card.Body>

                                

                                <div className="calender-box shadow mt-3">
                                    <p>{eventsEach.eventDate[0].monthh}</p>
                                    <p style={{ marginTop: '-20px' }}>{eventsEach.eventDate[0].day}</p>
                                </div>
                            </Card>
                        </Link>
                    </OverlayTrigger>


                </Col>

            </Row>
        </>
    )
}

export default CardDetails