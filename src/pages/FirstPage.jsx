import React from 'react'
import { Container } from 'react-bootstrap'
import opticals from '../assets/cloud.jpg'

function FirstPage() {
  return (
    <>
      <div style={{
        position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: "center", backgroundImage: `url(${opticals})`, backgroundSize: 'cover',
        height: '100vh', width: '213vh', backgroundColor: ' #b3cccc'
      }}>


        <div className='circleFour d-flex flex-column justify-content-center shadow'>
        <div className='circleinnerIn d-flex flex-column justify-content-center shadow text-dark'>
        <i class="fa-brands fa-readme fa-4x"></i>
        </div>
        </div>

        <div className='circleFive d-flex flex-column justify-content-center shadow '>
        <div className='circleinnerIn d-flex flex-column justify-content-center shadow text-dark'>
        <i class="fa-solid fa-pen-to-square fa-4x"></i>
        </div>
        </div>
        {/* <div className='circleSeven'></div> */}

        <div className='circleNine'></div>

        {/* main circle center */}
        <div className='circleOne d-flex justify-content-center p-2 '>
          {/* <h2 style={{color:'brown'}}> Event Management</h2> */}
          <div className='circleOneinner1  d-flex justify-content-center'>
            <div className='circleOneinner2  d-flex justify-content-center'>
              <div className='circleOneinner3 d-flex flex-column justify-content-center shadow'>
                <div className='circleOneinner4 d-flex flex-column justify-content-center shadow '>
                  <h1 className='text-dark shadow'>Event</h1>
                  <h2 className='text-dark shadow'>Management</h2>
                  <button className='rounded w-50 mt-2' style={{ backgroundColor: '#e6ffff' }}>start</button>
                </div>
              </div>
            </div>
          </div>
        </div>

       

        <div className='circleTwo d-flex flex-column justify-content-center shadow'>
          <div className='circleinnerIn d-flex flex-column justify-content-center shadow text-dark'>
          <i class="fa-solid fa-trash fa-3x"></i>
          </div>
        </div>

        <div className='circleThree d-flex flex-column justify-content-center shadow'>
          <div className='circleinnerIn d-flex flex-column justify-content-center shadow text-dark'>
          <i class="fa-solid fa-calendar-plus fa-4x"></i>
          </div>
        </div>

        {/* <div className='circleSix'></div> */}
        <div className='circleSeven '></div>

        <div className='circleEight'></div>

      </div>
    </>
  )
}

export default FirstPage