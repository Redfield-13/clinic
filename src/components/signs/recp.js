import React from 'react'

function recp() {
  return (
    <div className='recp'>
        <div className="header">
            <div className="logo nd">Care-Zone</div>
            <div className='right'>
                <p className='name'>Moafag Ahmed</p>
                <p className='desc'>Receptionist</p>
            </div>
        </div>
        <div className="mid nd ls">Today's appointments</div>
        <div className="table">
            <div className="row-1">
                <p className='docname'>Doctor</p>
                <p className='pat'>Patient</p>
                <p className='price'>Price (SDG)</p>
                <p className='time'>Time</p>
                <p>Billing Status</p>
            </div>
        </div>
        <div className="table">
            <div className="row-1">
                <p className='docname'>Eyad Ayman</p>
                <p className='pat'>Momen Wadoud</p>
                <p className='price'>2000</p>
                <p className='time'>9am</p>
                <select name="" id="">
                    <option className='op nd' value="male">Paid</option>
                    <option className='op nd'  value="female">Not Paid</option>
                </select>
            </div>
        </div>
        <div className="table">
            <div className="row-1">
                <p className='docname'>EYad Ayman</p>
                <p className='pat'>Mayada Abuagla</p>
                <p className='price'>2000</p>
                <p className='time'>11am</p>
                <select name="" id="">
                    <option className='op nd' value="male">Paid</option>
                    <option className='op nd'  value="female">Not Paid</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default recp