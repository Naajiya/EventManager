import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { getEvent } from '../services/allApi';



function EditEvent() {

    const {empid}=useParams()
    // console.log(empid)

    const [eventUpdate,setEventUpdate]=useState({})
    // console.log(eventUpdate)
    // const {eventName,eventPlace,eventDate,eventStartTime,eventEndsTime}=eventUpdate
    // console.log(eventDate)
    // const [eventDetails,setEventDetails]=useState({eventName:eventName,eventPlace:eventPlace,eventDate:eventDate,eventStartTime:eventStartTime,eventEndsTime:eventEndsTime})
    // console.log(eventDetails.eventName)

    useEffect(()=>{
        getClicekEvent()
    },[empid])


    const getClicekEvent=async()=>{
        try{
          const {data} = await getEvent()
        //   console.log(data)

          const findUp=data.find(f=>f.id==empid)
        //   console.log(findUp)
          setEventUpdate(findUp)
          const {eventName,eventPlace,eventDate,eventStartTime,eventEndsTime}=eventUpdate
        }catch(err){
            console.log(err)
        }
        
    }


    const handleChangeName=(value)=>{
        setEventUpdate({ ...eventUpdate,eventName : value })
    }

    const handleChangePlace=(value)=>{
        setEventUpdate({...eventUpdate,eventPlace:value})
    }

    const handleChangeDate=(value)=>{
        setEventUpdate({...eventUpdate,eventDate:value})
    }

    const handleChangeStarTime=(value)=>{
        setEventUpdate({...eventUpdate,eventStartTime:value})
    }

    const handleChagneEndTime=(value)=>{
        setEventUpdate({...eventUpdate,eventEndsTime:value})
    }
    

    return (
        <>
            <Container className='d-flex justify-content-center mt-4'>
                <Row className='w-50 d-flex justify-content-center align-items-center border border-dark p-3 bg-tertiory'> 
                    <div className=''>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Event Name"
                            className="mb-3"
                        >
                            <Form.Control value={eventUpdate.eventName} onChange={(e) => handleChangeName(e.target.value)} type='text' placeholder="Event Name" />
                        </FloatingLabel>
    
                        {/* event location */}
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Event Category"
                            className="mb-3"
                        >
                            <Form.Control value={eventUpdate.eventPlace} onChange={(e) =>handleChangePlace(e.target.value)} type='text' placeholder="Event Category" />
                        </FloatingLabel>
    
                        {/* event date */}
                        <FloatingLabel className="mb-3">
                            <Form.Control value={eventUpdate.eventDate} onChange={(e) => handleChangeDate(e.target.value)} type='date' placeholder="Event Category" />
                        </FloatingLabel>
    
                        {/*start time */}
                        <FloatingLabel label='start time' className="mb-3">
                            <Form.Control value={eventUpdate.eventStartTime} type='time' onChange={(e) => handleChangeStarTime(e.target.value)} placeholder="Event Category" />
                        </FloatingLabel>
    
                        <FloatingLabel label='end time' >
                            <Form.Control value={eventUpdate.eventEndsTime}type='time' onChange={(e) => handleChagneEndTime(e.target.value)} placeholder="Event Category" />
                        </FloatingLabel>
                       
                    </div>
                    <Button variant="outline-dark" className='w-50 mt-3'>Light</Button>
                </Row> 
               
            </Container>
        </>
    )
}

export default EditEvent