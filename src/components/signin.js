import React from 'react'

function signin() {

  const show = ()=>{
    document.getElementById('verify').style.display = 'block'
}

const dismiss = ()=>{
    document.getElementById('verify').style.display = 'none'
}
  return (
    <div>
        <div className="logo nd">Care-Zone</div>
        <div className="mid">Sign IN</div>

        <form className='pass nd' action="">
            <label className='y' htmlFor="">Email/Phone Number</label>
            <input placeholder='********' type="text" name="" id="" />
        </form>
        <form className='pass md rd' action="">
            <label htmlFor="">Password</label>
            <input placeholder='********' type="text" name="" id="" />
        </form>
        <div className="check">
            <p>New user? <a href="">Sign Up</a></p>
            <p className='for' onClick={show} >Forgot Password</p>
        </div>

        <button className='signin rd'>Sign In</button>

        <div id='verify' className="verify">
            <p className='vf'>Reset Password</p>
            <div className="wel nd">We will send you a verification code to your phone number.</div>
            <form className='ver' action="">
                <label htmlFor="">Phone Number</label>
                <input placeholder='0*********' type="text" />
            </form>
            <button onClick={dismiss} className='signin rd'>Send</button>
        </div>
    </div>
  )
}

export default signin