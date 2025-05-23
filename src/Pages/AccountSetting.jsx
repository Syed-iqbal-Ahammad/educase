
import { IoCamera } from "react-icons/io5";
import { useSelector } from 'react-redux'
const AccountSetting = () => {
  const name = useSelector((state) => state.name.value)
  const email = useSelector((state) => state.email.value)
 
  
  return (
    <>
      <div className="h-screen w-screen flex justify-center p-4 sm:p-8 md:p-14 ">
        <div className="bg-slate-50  w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw] border border-slate-300 flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="bg-white px-5 py-4">
              <h3 className="text-xl font-semibold">Account Setting</h3>
            </div>
            <div className="p-4 px-5">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 items-center sm:items-start">
                <div className="relative">
                  <div
                    className="rounded-full w-[80px] h-[80px] bg-center bg-cover"
                    style={{
                      backgroundImage:
                        "url('https://images.pexels.com/photos/11644250/pexels-photo-11644250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                    }}
                  ></div>
                  <IoCamera className="bg-violet-600 w-[28px] h-[28px] rounded-full text-white p-1 absolute bottom-0 right-0" />
                </div>
                <div className="flex flex-col text-center sm:text-left">
                  <span className="font-bold text-lg">{name}</span>
                  <span className="text-gray-600">{email}</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                commodi reprehenderit necessitatibus atque totam obcaecati.
              </p>
              <hr className="border-dashed mt-4" />
            </div>
          </div>
          <div>
            <hr className="border-dashed" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
