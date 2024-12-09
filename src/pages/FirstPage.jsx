import React from 'react'
import { Container } from 'react-bootstrap'
import opticals from '../assets/cloud.jpg'

function FirstPage() {
  return (
    <>
    <div style={{position:'absolute', display:'flex',alignItems:'center', justifyContent:"center",backgroundImage: `url(${opticals})`,backgroundSize: 'cover',
          height: '0vh', width:'213vh',backgroundColor:' #b3cccc'}}>

            {/* main circle center */}
            <div className='circleOne d-flex justify-content-center p-2 '>
               {/* <h2 style={{color:'brown'}}> Event Management</h2> */}
               <div className='circleOneinner1  d-flex justify-content-center'>
                <div className='circleOneinner2  d-flex justify-content-center'>
                  <div className='circleOneinner3 d-flex flex-column justify-content-center shadow'>
                    <div className='circleOneinner4 d-flex flex-column justify-content-center shadow '>
                      <h1 className='text-dark shadow'>Event</h1>
                      <h2 className='text-dark shadow'>Management</h2>
                      <button className='rounded w-50 mt-2' style={{backgroundColor:'#e6ffff'}}>start</button>
                    </div>
                  </div>
                </div>
               </div>
            </div>

            <div className='circleTwo'></div>

    </div>
    </>
  )
}

export default FirstPage