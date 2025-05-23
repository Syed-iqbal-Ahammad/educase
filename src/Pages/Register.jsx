import { useState } from "react"
import { useDispatch } from 'react-redux'
import { setEmail } from "../features/Email/EmailSlice"
import { setName } from "../features/Name/NameSlice"
import { useNavigate } from "react-router"

const Register = () => {
  const [Agency, setAgency] = useState(true)
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [companyname, setcompanyname] = useState("")
  const [phone, setphone] = useState("")
  const [password, setpassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const HandleSubmit = (e) => {
    e.preventDefault()
    dispatch(setEmail(email))
    dispatch(setName(name))
    navigate("/setting")
  }

  const HandleChange = () => {
    setAgency(!Agency)
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center p-4 sm:p-8 md:p-14">
        <div className="bg-slate-50 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw] p-5 border border-slate-300">
          <form className="flex flex-col gap-4 h-full" onSubmit={HandleSubmit}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="leading-1 text-xl md:text-2xl font-semibold inline">
                    Create your <br /> PopX account
                  </h2>
                </div>
                <div className="flex gap-2 flex-col">
                  <div className="flex flex-col">
                    <label className="text-violet-500 font-bold text-[12px] bg-slate-50 relative left-3 top-2 block w-[30%]" htmlFor="name">
                      &nbsp; Full Name<span className="text-red-600">*</span>
                    </label>
                    <input className="border-2 rounded px-3 py-0.5 border-slate-400 placeholder:font-bold placeholder:text-sm" type="text" id="name" placeholder="Enter your name" minLength={4} value={name} onChange={(e) => setname(e.target.value)} required />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-violet-500 font-bold text-[12px] bg-slate-50 relative left-3 top-2 block w-[33%]" htmlFor="number">
                      &nbsp; Phone Number<span className="text-red-600">*</span>
                    </label>
                    <input className="border-2 rounded px-3 py-0.5 border-slate-400 placeholder:font-bold placeholder:text-sm" type="number" id="number" placeholder="Enter your number" value={phone} onChange={(e) => setphone(e.target.value)} required minLength={9} />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-violet-500 font-bold text-[12px] bg-slate-50 relative left-3 top-2 block w-[30%]" htmlFor="email">
                      &nbsp; Email Address<span className="text-red-600">*</span>
                    </label>
                    <input className="border-2 rounded px-3 py-0.5 border-slate-400 placeholder:font-bold placeholder:text-sm" type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setemail(e.target.value)} required minLength={4} />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-violet-500 font-bold text-[12px] bg-slate-50 relative left-4 top-2 block w-[25%]" htmlFor="password">
                      &nbsp;Password<span className="text-red-600">*</span>
                    </label>
                    <input className="border-2 rounded px-3 py-0.5 border-slate-400 placeholder:font-bold placeholder:text-sm" type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setpassword(e.target.value)} required minLength={8} />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-violet-500 font-bold text-[12px] bg-slate-50 relative left-4 top-2 block w-[33%]" htmlFor="companyname">
                      &nbsp;Company Name
                    </label>
                    <input className="border-2 rounded px-3 py-0.5 border-slate-400 placeholder:font-bold placeholder:text-sm" type="text" id="companyname" placeholder="Marry Doe" value={companyname} minLength={4} onChange={(e) => setcompanyname(e.target.value)} />
                  </div>

                  <div className="flex flex-col">
                    <label>Are you an Agency?<span className="text-red-600">*</span></label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center justify-center gap-2">
                        <input onChange={HandleChange} checked={Agency} type="radio" required />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2 justify-center">
                        <input onChange={HandleChange} checked={!Agency} type="radio" required />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="cursor-pointer font-bold bg-violet-600 text-slate-200 hover:text-slate-300 p-1 py-2 rounded-lg w-full hover:bg-violet-700"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
