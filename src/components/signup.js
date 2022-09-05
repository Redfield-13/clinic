import React from 'react'

function signup() {

    const show = ()=>{
        document.getElementById('verify').style.display = 'block'
    }

    const dismiss = ()=>{
        document.getElementById('verify').style.display = 'none'
    }
  return (
    <div>
        <div className="logo nd">Care-Zone</div>
        <div className="mid">Sign Up</div>
        <div className="forms">
            <div className="form-1">
                <label  htmlFor="">Username</label>
                <input placeholder='Four Names' type="text" name="" id="" />
            </div>
            <div className="form-1">
                <label htmlFor="">Phone</label>
                <input placeholder='0*********' type="text" name="" id="" />
            </div>
        </div>

        <div className="forms">
            <div className="form-1">
                <label className='mag' htmlFor="">Address</label>
                <input placeholder='Block,Street,City' type="text" name="" id="" />
            </div>
            <div className="form-1">
                <label htmlFor="">Email</label>
                <input placeholder='Optional' type="text" name="" id="" />
            </div>
        </div>
        <div className="forms">
            <div className="form-1">
                <label className='mag nd' htmlFor="">Gender</label>
                <select name="" id="">
                    <option className='op' value="male">Male</option>
                    <option className='op'  value="female">Female</option>
                </select>
            </div>
            <div className="form-1">
                <label htmlFor="">Date Of Birth</label>
                <input placeholder='DD/MM/YYYY' type="text" name="" id="" />
            </div>
        </div>
        <form className='pass' action="">
            <label htmlFor="">Password</label>
            <input placeholder='********' type="text" name="" id="" />
        </form>
        <form className='pass md' action="">
            <label htmlFor="">Confirm Password</label>
            <input placeholder='********' type="text" name="" id="" />
        </form>

        <button onClick={show} className='signin nd'>Sign Up</button>

        <div id='verify' className="verify">
            <p className='vf'>Verify Your Phone Number</p>
            <div className="wel nd">We will send you a verification code to your phone number,enter it to sign up.</div>
            <form className='ver' action="">
                <label htmlFor="">Verification Code</label>
                <input placeholder='000000' type="text" />
            </form>
            <button onClick={dismiss} className='signin rd'>Verify</button>
        </div>
    </div>
  )
}

export default signup