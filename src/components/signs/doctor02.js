import React from 'react'

function doctor02() {
  return (
    <div>
        <div className="header">
            <div className="logo nd">Care-Zone</div>
            <div className='right'>
                <p className='name'>Eyad Ayman</p>
                <p className='desc'>Doctor</p>
            </div>
        </div>
        <div className="mid nd ls">Mayada Abuagla</div>
        <div className="details">
            <div className="causes">
                <p className='st'>Cause</p>
                <p>Front teeth are bleeding and hurting</p>
            </div>
            <div className="causes">
                <p className='st'>Medicines being taken</p>
                <p>None</p>
            </div>
            <div className="causes">
                <p className='st'>Medicines given</p>
                <p>Medicine 1 , Medicine 2</p>
            </div>
            <div className="causes">
                <p className='st'>Doctor Notes</p>
                <p>Take the medicines for 1 week and come again for recheck.</p>
            </div>
        </div>

        <button className='signin app'>End Appointment</button>
    </div>
  )
}

export default doctor02