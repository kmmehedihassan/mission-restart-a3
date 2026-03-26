import { FaArrowTrendUp, FaDownload, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import apps from "../data/apps.json";

const TRENDING_LIMIT = 8;

export default function TrendingAppsSection() {
    const trendingApps = apps.slice(0, TRENDING_LIMIT);

    return (
        <section aria-label="Trending apps" className="py-16">

            {/* Section header */}
            <header className="text-center space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3 text-purple-600">
                    Trending Apps
                    <FaArrowTrendUp className="text-pink-500" size={40} aria-hidden="true" />
                </h2>
                <p className="text-gray-500">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </header>

            {/* App cards grid */}
            <ul className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 list-none">
                {trendingApps.map((app) => (
                    <li key={app.id}>
                        <Link
                            to={`/apps/${app.id}`}
                            aria-label={`View details for ${app.title}`}
                            className="bg-white p-4 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col gap-4 h-full"
                        >
                            {/* App thumbnail */}
                            <img
                                src={app.image}
                                alt={`${app.title} icon`}
                                className="w-full object-cover rounded-xl"
                            />

                            {/* App title */}
                            <p className="font-semibold text-center text-gray-800">{app.title}</p>

                            {/* Download count + rating badges */}
                            <div className="flex justify-between mt-auto">
                                <span className="flex items-center gap-1 text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded-full">
                                    <FaDownload aria-hidden="true" />
                                    {(app.downloads / 1_000_000).toFixed(0)}M
                                </span>

                                <span className="flex items-center gap-1 text-purple-600 text-sm font-medium bg-purple-100 px-2 py-1 rounded-full">
                                    <FaStar aria-hidden="true" />
                                    {app.ratingAvg}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Show all button */}
            <div className="text-center">
                <Link
                    to="/apps"
                    className="inline-block px-8 py-3 rounded-sm text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] hover:shadow-xl transition-shadow duration-200"
                >
                    Show All
                </Link>
            </div>
        </section>
    );
}
