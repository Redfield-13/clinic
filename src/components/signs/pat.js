import React from 'react'
import plus from '../../images/plus-icon.svg'
import cross from '../../images/circle-xmark-solid.svg'

function pat() {
    const show = ()=>{
        document.getElementById('ca').style.display = 'block'
    }
    const cancel = ()=>{
        document.getElementById('ca').style.display = 'none'
        document.getElementById('appos').style.display = 'none'
    }
  return (
    <div>
        <div className="header">
            <div className="logo nd">Care-Zone</div>
            <div className='right'>
                <p className='name'>Mayada Abuagla</p>
                <p className='desc'>Patient</p>
            </div>
        </div>
        <div className="data">
             <div className="mid nd ls fl">Doctors List</div>
             <input cl placeholder='Dentists' className='req pat' type="text" name="" id="" />
             <button className='signin appo'><img className='plus' src={plus} alt="" /> Appointment</button>
        </div>
        <div className="table">
            <div className="row-1">
                <p className='docname'>Doctor</p>
                <p className='price'>Price (SDG)</p>
                <p className='time nd'>Time</p>
            </div>
        </div>
        <div className="table">
            <div className="row-1">
                <p className='docname'>Eyad Ayman</p>
                <p className='price'>2000</p>
                <p className='time nd'>Sun - Tue 8am - 1pm</p>
            </div>
        </div>

        <div className="table">
            <div className="row-1">
                <p className='docname'>Safaa Albasheer</p>
                <p className='price'>3000</p>
                <p className='time nd'>Tue - Thu 8am - 1pm</p>
            </div>
        </div>

        <div className="mid nd ls fl">Previous Appointments</div>
        <div className="table">
            <div className="row-1">
                <p className='docname'>Doctor</p>
                <p className='price'>Price (SDG)</p>
                <p>Billing Status</p>                
                <p className='time'>Time</p>
                <p>Cancel</p>
                
            </div>
        </div>

        <div id='appos' className="table">
            <div className="row-1">
                <p className='docname'>Eyad Ayman</p>
                <p className='price'>2000</p>
                <p>Not Paid</p>                
                <p className='time'>Mon, 12pm</p>
                <p><img onClick={show} className='cross' src={cross} alt="" /></p>
                
            </div>
        </div>

        <div id='ca' className="cancel">
            <p>Cancel Appointment</p>
            <button onClick={cancel} className='signin'>Confirm</button>
        </div>
    </div>
  )
}

export default pat