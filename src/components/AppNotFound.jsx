import { useNavigate } from "react-router-dom";
import notFoundImg from "../assets/App-Error.png";

export default function AppNotFound() {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 gap-6">

            <img
                src={notFoundImg}
                alt="App not found illustration"
                className="w-64"
            />

            <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Oops! App Not Found
                </h1>
                <p className="text-gray-500 max-w-md">
                    The app you are looking for is not on our system. Please try another one.
                </p>
            </div>

            <button
                onClick={() => navigate(-1)}
                aria-label="Go back to previous page"
                className="px-8 py-3 rounded-sm text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] hover:shadow-xl transition-shadow duration-200"
            >
                Go Back!
            </button>
        </main>
    );
}
