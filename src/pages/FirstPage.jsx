import React from 'react'
import { Container } from 'react-bootstrap'
import opticals from '../assets/cloud.jpg'
import { Link } from 'react-router-dom'


function FirstPage() {
  return (
    <>
      <div style={{
        position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: "center", backgroundImage: `url(${opticals})`, backgroundSize: 'cover',
        height: '100vh', width: '213vh', backgroundColor: ' #b3cccc'
      }}>

        {/* <div className="header-container" style={{ textAlign: 'center', marginBottom: '1rem' }}>
  <h1 className="head-style w-100" style={{ margin: 0 }}>Simple Event Management System</h1>
</div> */}

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
        <div className='circleOne d-flex justify-content-center p-2 ' style={{
          transform: 'scale(1)', // Initial state
          transition: 'transform 0.3s ease-in-out', // Smooth transition
        }} onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
        }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; // Reset on hover out
          }}>
          {/* <h2 style={{color:'brown'}}> Event Management</h2> */}
          <div className='circleOneinner1  d-flex justify-content-center'>
            <div className='circleOneinner2  d-flex justify-content-center'>
              <div className='circleOneinner3 d-flex flex-column justify-content-center shadow'>
                <div className='circleOneinner4 d-flex flex-column justify-content-center shadow '>
                  <h1 className='text-dark shadow fs-1 fw-bold'>Event</h1>
                  <h2 className='text-dark shadow fs-2 fw-bold'>Management</h2>
                  <h4 className='text-dark fw-bold shadow'>System</h4>
                  <Link to={'/Landing'}>
                    <button
                      className="rounded w-100 mt-2 glowing-button"
                      style={{ backgroundColor: '#e6ffff', border: 'none', cursor: 'pointer' }}
                    >
                      start
                    </button>
                  </Link>

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