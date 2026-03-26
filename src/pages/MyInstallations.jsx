import { useState } from "react";
import { useInstall } from "../context/InstallContext";
import { FaDownload, FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

const SORT_OPTIONS = [
    { value: "",     label: "Sort By Size" },
    { value: "asc",  label: "Low → High"  },
    { value: "desc", label: "High → Low"  },
];

function parseSizeMB(size) {
    if (typeof size === "number") return size;
    if (typeof size === "string") return Number(size.replace(" MB", ""));
    return 0;
}

export default function MyInstallations() {
    const { installedApps, uninstallApp } = useInstall();
    const [sortOrder, setSortOrder] = useState("");

    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortOrder === "asc")  return parseSizeMB(a.size) - parseSizeMB(b.size);
        if (sortOrder === "desc") return parseSizeMB(b.size) - parseSizeMB(a.size);
        return 0;
    });

    if (installedApps.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 text-center px-4">
                <h1 className="text-3xl font-bold text-gray-800">No Apps Installed Yet</h1>
                <p className="text-gray-500">
                    Go to the Apps page and install your first app.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen py-16">
            <div className="w-11/12 mx-auto">

                {/* Page heading */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">Your Installed Apps</h1>
                    <p className="text-gray-500 pt-2 text-base">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </header>

                {/* Count + sort controls */}
                <div className="flex justify-between items-center mb-6">
                    <p className="font-semibold text-gray-700" aria-live="polite">
                        {installedApps.length} App{installedApps.length !== 1 ? "s" : ""} Found
                    </p>

                    <label htmlFor="sort-select" className="sr-only">Sort installed apps</label>
                    <select
                        id="sort-select"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded-md text-sm bg-white cursor-pointer"
                    >
                        {SORT_OPTIONS.map(({ value, label }) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </div>

                {/* Installed app list */}
                <ul className="space-y-4 list-none">
                    {sortedApps.map((app) => (
                        <li
                            key={app.id}
                            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                        >
                            {/* App thumbnail + info */}
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden shrink-0">
                                    <img
                                        src={app.image}
                                        alt={`${app.title} icon`}
                                        className="object-contain w-full h-full"
                                    />
                                </div>

                                <div>
                                    <h2 className="font-semibold text-gray-800">{app.title}</h2>

                                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                        <span className="flex items-center gap-1 text-green-600">
                                            <FaDownload aria-hidden="true" />
                                            {(app.downloads / 1_000_000).toFixed(0)}M
                                        </span>

                                        <span className="flex items-center gap-1 text-orange-500">
                                            <FaStar aria-hidden="true" />
                                            {app.ratingAvg}
                                        </span>

                                        <span className="text-gray-400">{app.size} MB</span>
                                    </div>
                                </div>
                            </div>

                            {/* Uninstall action */}
                            <button
                                onClick={() => {
                                    uninstallApp(app.id);
                                    toast.error(`${app.title} uninstalled`);
                                }}
                                aria-label={`Uninstall ${app.title}`}
                                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Uninstall
                            </button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}
