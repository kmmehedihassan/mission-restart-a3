import { useState, useEffect } from "react";
import { FaDownload, FaStar, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import appsData from "../data/apps.json";
import Loader from "../components/Loader";

const SEARCH_DEBOUNCE_MS = 400;

export default function AllApps() {
    const [searchQuery, setSearchQuery]     = useState("");
    const [isSearching, setIsSearching]     = useState(false);
    const [filteredApps, setFilteredApps]   = useState(appsData);

    useEffect(() => {
        setIsSearching(true);

        const debounceTimer = setTimeout(() => {
            const query = searchQuery.toLowerCase();
            const results = appsData.filter((app) =>
                `${app.title} ${app.companyName}`.toLowerCase().includes(query)
            );
            setFilteredApps(results);
            setIsSearching(false);
        }, SEARCH_DEBOUNCE_MS);

        return () => clearTimeout(debounceTimer);
    }, [searchQuery]);

    return (
        <section className="py-16" aria-label="All applications">

            {/* Page heading + search bar */}
            <div className="w-11/12 mx-auto text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Our All Applications
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>

                {/* Results count + search input row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
                    <p className="text-gray-700 font-medium" aria-live="polite">
                        ({filteredApps.length}) Apps Found
                    </p>

                    <label className="relative w-full md:w-72" htmlFor="app-search">
                        <FaSearch
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            aria-hidden="true"
                        />
                        <input
                            id="app-search"
                            type="search"
                            placeholder="Search Apps..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </label>
                </div>
            </div>

            {/* Results area */}
            {isSearching ? (
                <Loader />
            ) : (
                <ul className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 list-none">

                    {filteredApps.length > 0 ? (
                        filteredApps.map((app) => (
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
                                        className="w-full h-56 object-cover rounded-xl"
                                    />

                                    {/* App title */}
                                    <p className="font-semibold text-center text-gray-800">
                                        {app.title}
                                    </p>

                                    {/* Download + rating badges */}
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
                        ))
                    ) : (
                        <li className="col-span-full text-center text-gray-500 py-10">
                            No apps found matching &ldquo;{searchQuery}&rdquo;
                        </li>
                    )}
                </ul>
            )}
        </section>
    );
}
