import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function HomeCalender() {

    const [value, onChange] = useState(new Date());


    const eventDropped=(e)=>{
        const eventsId=e.dataTransfer.getData("eventId")
        console.log(`event dropped with ${eventsId}`)

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