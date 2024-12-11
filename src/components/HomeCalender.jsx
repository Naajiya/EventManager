import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getSinglEvent } from '../services/allApi';



function HomeCalender() {

    const [value, onChange] = useState(new Date());


    const eventDropped=async(e)=>{
        const eventsId=e.dataTransfer.getData("eventId")
        console.log(`event dropped with ${eventsId}`)

        try{


            const {data}=await getSinglEvent(eventsId)
            console.log(data)
    
            const {eventDate}=data
            console.log(eventDate)
    
            const eventDates= new Date(data.eventDate)
    
            
            const moths=eventDates.getMonth()// give 0-jan
            console.log(moths)
            
            const days=eventDates.getDate()+1
            console.log(days)

            const years=eventDates.getFullYear()
            console.log(years)

            const eveDate=new Date(years,moths,days);
            onChange(eveDate)


        }catch(err){
            console.log(err)
        }
       

    }


    const dragOverStart=(e)=>{
        e.preventDefault()
    }



    return (
        <>
            <div droppable={true} onDrop={(e) => eventDropped(e)} onDragOver={(e) => dragOverStart(e)} className=''>
                <h2>ToDay</h2>
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    )
}

export default HomeCalender