import React from 'react'
import check from '../../images/check-solid.svg'

function manager() {
  return (
    <div>
        <div className="header">
            <div className="logo nd">Care-Zone</div>
            <div className='right'>
                <p className='name'>Mojtaba Ahmed</p>
                <p className='desc'>Manager</p>
            </div>
        </div>
        <div className="mid nd ls">Doctors List</div>
        <div className="table">
            <div className="row-1">
                <p className='docname'>Doctor</p>
                <p className='docsch'>Schedule</p>
                <p className='set'>Set Schedule</p>
                <p className='ok'>Ok</p>
            </div>
        </div>
        <div className="table">
            <div className="row-1">
                <p className='docname'>Eyad Ayman</p>
                <p className='docsch'>Sun - Tue 8am - 1pm</p>
                <input placeholder='start day - end day,time' type="text" name="" id="" />
                <p className='ok'><img src={check} alt="" /></p>
            </div>
        </div>
        <div className="table">
            <div className="row-1">
                <p className='docname'>Safaa Albasheer</p>
                <p className='docsch'>Tue - Thu 8am - 1pm</p>
                <input placeholder='start day - end day,time' type="text" name="" id="" />
                <p className='ok'><img src={check} alt="" /></p>
            </div>
        </div>

        {/* Second */}

        <div className="mid nd ls">Update Schedule Requests</div>
        <div className="table">
            <div className="row-1">
                <p className='docname'>Doctor</p>
                <p className='docsch'>Current Schedule</p>
                <p className='docsch'>New Schedule</p>
                <p className='ok nd'>Confirm</p>
            </div>
        </div>
        <div className="table">
            <div className="row-1">
                <p className='docname'>Eyad Ayman</p>
                <p className='docsch'>Sun - Tue 8am - 1pm</p>
                <p className='docsch'>Mon - Wed 9am - pm</p>
                
                <p className='ok nd'><img src={check} alt="" /></p>
            </div>
        </div>
    </div>
  )
}

export default manager