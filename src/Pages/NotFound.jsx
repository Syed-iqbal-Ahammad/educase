import { useNavigate } from "react-router";
import { FaSadTear } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-screen bg-slate-50 flex flex-col items-center justify-center text-center p-6">
      <div className="bg-white border border-slate-300 rounded-2xl shadow-xl p-10 max-w-md w-full">
        <div className="flex flex-col items-center justify-center space-y-4">
          <FaSadTear className="text-violet-600 text-6xl" />
          <h1 className="text-4xl font-bold text-gray-800">404</h1>
          <h2 className="text-xl font-semibold text-gray-600">
            Page Not Found
          </h2>
          <p className="text-sm text-gray-500">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={goHome}
            className="mt-4 px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 font-bold"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
