import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEvent } from '../services/allApi';
import { Col, Container, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Viewdetails() {

  const { id } = useParams();
  console.log(id);

  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState(null);
  console.log(events);

  useEffect(() => {
    getCompleteEvent();
  }, []); // Empty array ensures this effect runs only once

  const getCompleteEvent = async () => {
    try {
      const { data } = await getEvent();
      // console.log(data)
      const foundEvent = data.find(f => f.id == id);
      if (foundEvent) {
        setEvents(foundEvent);
        console.log(foundEvent.eventDate)
        const eventDate = new Date(foundEvent.eventDate);
        const mnth=eventDate.getMonth()
        console.log(mnth)
        const day=eventDate.getDate()+1
        console.log(day)
        const year=eventDate.getFullYear()
        console.log(year)
       
        const eventDates = new Date(year,mnth,day);
        setDate(eventDates);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row className='m-3 bg-dark p-5'>
        <Col>
          <Calendar value={date} />
        </Col>
        <Col>
        {events ? (
        <div>
          <h2>Name: {events.eventName}</h2>
          <h2>Date: {events.eventDate}</h2>
          <div className='bg-info p-3'><h2>Time: {events.eventStartTime} - {events.eventEndsTime}</h2></div>
        </div>
      ) 
           
           : (
            <h2>Loading...</h2>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Viewdetails;
