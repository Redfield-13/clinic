import React from 'react'

function doctor() {
  return (
    <div className='doctor'>
        <div className="header">
            <div className="logo nd">Care-Zone</div>
            <div className='right'>
                <p className='name'>Eyad Ayman</p>
                <p className='desc'>Doctor</p>
            </div>
        </div>
        <div className="mid nd ls">Booked Appointments</div>
        <div className="table">
            <div className="row-1">
                <p className='pat nd'>Patient</p>
                <p className='time nd' >Time</p>
                <p className='cause'>Cause</p>
            </div>
        </div>
        <div className="table">
            <div className="row-1">
                <p className='pat nd'>Momen Wadoud</p>
                <p className='time nd' >11am</p>
                <p className='cause'>Pain when drinking cold water.</p>
            </div>
        </div>
        <div className="table">
            <div className="row-1">
                <p className='pat nd'>Mayada Abuagla</p>
                <p className='time nd' >1pm</p>
                <p className='cause'>Front teeth are bleeding and hurts.</p>
            </div>
        </div>

        <div className="mid nd ls">Update Schedule Requesta</div>
        <p className='tt'>Current time : Sun - Tue 8am - 1pm</p>
        <form action="">
            <label className='tt' htmlFor="">New time : </label>
            <input  placeholder='start day-end day,time' className='req' type="text" name="" id="" />
        </form>

        <button className='signin ff'>confirm</button>
    </div>
  )
}

export default doctor