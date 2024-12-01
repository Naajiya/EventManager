import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Landing() {
    return (
        <>


            <Container>

                <Row>
                    <Col lg={8}>
                        <div className='d-flex justify-content-between'>
                            <h2>Events</h2>
                            <h5>Create Event  <Button variant="outline-dark" className='m-2 pt-1'><i class="fa-solid fa-plus"></i></Button> </h5>


                        </div>

                        <div className='d-flex'>
                            <Col lg={4}>
                                <Card className='border rounded-4 bg-secondary m-2'>
                                
                                    <Card.Body>
                                    <Card.Title>Music Program</Card.Title>
                                    <Card.Text>
                                        <h6>music events</h6>
                                        <p>2:15- 2:50</p>
                                    </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                                
                            </Col>

                            <Col lg={4}>
                                <Card className='border rounded-4 bg-secondary m-2'>
                                
                                    <Card.Body>
                                    <Card.Title>Music Program</Card.Title>
                                    <Card.Text>
                                        <h6>music events</h6>
                                        <p>2:15- 2:50</p>
                                    </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                                
                            </Col>
                        </div>


                    </Col>
                    <Col></Col>
                </Row>

            </Container>
        </>
    )
}

export default Landing