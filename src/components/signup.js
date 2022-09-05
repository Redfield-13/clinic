import React from 'react'

function signup() {
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

        <button className='signin nd'>Sign Up</button>
    </div>
  )
}

export default signup