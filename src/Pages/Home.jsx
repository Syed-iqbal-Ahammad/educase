import { useNavigate } from "react-router"

const Home = () => {
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate("/register")
    }
    const handleLogin = () => {
        navigate("/login")
    }

    return (
        <>
            <div className="h-screen w-screen flex justify-center p-4 sm:p-8 md:p-14">
                <div className="bg-slate-50 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw] p-5 border border-slate-300">
                    <div className="flex p-4 flex-col items-baseline justify-end h-full">
                        <div className="text-left py-4">
                            <h2 className="leading-1 text-xl md:text-2xl font-semibold">Welcome to PopX</h2>
                            <p className="text-left text-sm md:text-base">
                                Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <button
                                className="cursor-pointer font-bold bg-violet-600 text-slate-200 hover:text-slate-300 p-1 py-2 rounded-lg w-full hover:bg-violet-700"
                                onClick={handleRegister}
                            >
                                Create Account
                            </button>
                            <button
                                className="cursor-pointer p-1 py-2 font-bold text-black bg-purple-300 hover:bg-purple-400 rounded-lg w-full"
                                onClick={handleLogin}
                            >
                                Already Registered? Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
