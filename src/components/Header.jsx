import { useState } from "react";
import logo from "../assets/logo.png";
import { FiHome, FiGrid, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const NAV_LINKS = [
    { name: "Home",         path: "/",                 icon: <FiHome /> },
    { name: "Apps",         path: "/apps",             icon: <FiGrid /> },
    { name: "Installation", path: "/my-installations", icon: <FiDownload /> },
];

const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 text-base font-semibold transition-colors duration-200 ${
        isActive
            ? "text-gray-900 border-b-2 border-indigo-600 pb-0.5"
            : "text-gray-500 hover:text-gray-900"
    }`;

const drawerNavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
        isActive
            ? "bg-indigo-50 text-indigo-600 shadow-sm"
            : "text-gray-500 hover:bg-gray-100"
    }`;

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            {/* Sticky top navigation bar */}
            <header className="bg-white shadow-sm sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

                    {/* Brand + mobile menu trigger */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsDrawerOpen(true)}
                            aria-label="Open navigation menu"
                            className="lg:hidden p-1 rounded-md text-gray-600 hover:bg-gray-100 transition"
                        >
                            <FiMenu size={24} />
                        </button>

                        <Link to="/" aria-label="AppHub home" className="flex items-center gap-2">
                            <img src={logo} alt="AppHub logo" className="w-10 h-10 object-contain" />
                            <span className="text-xl font-bold text-indigo-700 uppercase tracking-wide">
                                AppHub
                            </span>
                        </Link>
                    </div>

                    {/* Desktop nav links */}
                    <nav aria-label="Primary navigation" className="hidden lg:flex gap-8">
                        {NAV_LINKS.map((link) => (
                            <NavLink key={link.name} to={link.path} className={navLinkClass}>
                                <span aria-hidden="true">{link.icon}</span>
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* GitHub contribute button */}
                    <a
                        href="https://github.com/kmmehedihassan/mission-restart-a3"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Contribute on GitHub"
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                    >
                        <FaGithub aria-hidden="true" />
                        Contribute
                    </a>
                </div>
            </header>

            {/* Mobile drawer backdrop */}
            <div
                role="presentation"
                onClick={() => setIsDrawerOpen(false)}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
                    isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Mobile navigation drawer */}
            <aside
                aria-label="Mobile navigation drawer"
                className={`fixed top-0 left-0 w-72 h-full bg-white/90 backdrop-blur-xl z-50 shadow-2xl
                    flex flex-col transform transition-transform duration-300 ${
                    isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Drawer brand row */}
                <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <Link to="/" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-2">
                        <img src={logo} alt="AppHub logo" className="w-10 h-10 object-contain" />
                        <span className="text-xl font-bold text-indigo-700 uppercase tracking-wide">
                            AppHub
                        </span>
                    </Link>

                    <button
                        onClick={() => setIsDrawerOpen(false)}
                        aria-label="Close navigation menu"
                        className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition"
                    >
                        <FiX size={20} />
                    </button>
                </div>

                {/* Drawer nav links */}
                <nav className="flex-1 p-4 space-y-2" aria-label="Mobile navigation links">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsDrawerOpen(false)}
                            className={drawerNavLinkClass}
                        >
                            <span className="text-lg" aria-hidden="true">{link.icon}</span>
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Drawer contribute button */}
                <div className="p-4 border-t border-gray-100">
                    <a
                        href="https://github.com/SaikatKarar/mission-restart-a3"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-semibold transition-colors duration-200"
                    >
                        <FaGithub aria-hidden="true" />
                        Contribute
                    </a>
                </div>
            </aside>
        </>
    );
}
