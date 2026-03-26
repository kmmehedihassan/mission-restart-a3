import { useNavigate } from "react-router-dom";
import notFoundImg from "../assets/error-404.png";

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 gap-6">

            <img
                src={notFoundImg}
                alt="404 page not found illustration"
                className="w-64"
            />

            <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Oops, page not found!
                </h1>
                <p className="text-gray-500 max-w-md">
                    The page you are looking for is not available.
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
