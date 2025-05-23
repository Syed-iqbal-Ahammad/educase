import { useState } from "react"

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const HandleSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: email,
      password: password
    }
    console.log(data)
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center p-4 sm:p-8 md:p-14">
        <div className="bg-slate-50 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw] p-5 pt-10 border border-slate-300">
          <div>
            <h2 className="leading-1 text-xl md:text-2xl font-semibold inline">
              Sign in to your <br /> PopX account
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <form className="flex flex-col gap-4 mt-4" onSubmit={HandleSubmit}>
              <div>
                <div className="flex flex-col">
                  <label
                    className="text-violet-500 font-bold text-[12px] bg-slate-50 relative left-3 top-2 block w-[30%]"
                    htmlFor="email"
                  >
                    &nbsp; Email Address
                  </label>
                  <input
                    className="border-2 rounded px-3 py-0.5 border-slate-400 placeholder:font-bold placeholder:text-sm"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    minLength={4}
                    required
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label
                    className="text-violet-500 font-bold text-[12px] bg-slate-50 relative left-4 top-2 block w-[20%]"
                    htmlFor="password"
                  >
                    &nbsp;Password
                  </label>
                  <input
                    className="border-2 rounded px-3 py-0.5 border-slate-400 placeholder:font-bold placeholder:text-sm"
                    minLength={8}
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              <button
                className={`cursor-pointer font-bold bg-gray-400 p-1 text-white ${
                  email.length >= 4 && password.length >= 8 &&
                  'bg-violet-600 hover:bg-violet-700 text-slate-200 hover:text-slate-300'
                } rounded-lg w-full`}
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
