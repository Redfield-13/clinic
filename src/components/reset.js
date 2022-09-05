import React from 'react'


function reset() {
  return (
    <div>
        <div className="logo nd">Care-Zone</div>
        <div className="mid nd">Reset Password</div>
        <form className='pass md rd fr ls' action="">
            <label htmlFor="">Verification Code</label>
            <input placeholder='********' type="text" name="" id="" />
        </form>
        <form className='pass md rd fr ft'  action="">
            <label htmlFor="">New Password</label>
            <input placeholder='********' type="text" name="" id="" />
        </form>
        <form className='pass md rd fr' action="">
            <label htmlFor="">Confrim Password</label>
            <input placeholder='********' type="text" name="" id="" />
        </form>

        <button className='signin ls'>Confirm</button>
    </div>
  )
}

export default reset