import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NAV_LINKS = [
    { label: "Home",         path: "/" },
    { label: "Apps",         path: "/apps" },
    { label: "Installation", path: "/my-installations" },
];

const SOCIAL_LINKS = [
    { href: "https://x.com",        label: "X (Twitter)", icon: <FaXTwitter size={15} /> },
    { href: "https://linkedin.com", label: "LinkedIn",    icon: <FaLinkedinIn size={15} /> },
    { href: "https://facebook.com", label: "Facebook",    icon: <FaFacebookF size={15} /> },
    {
        href: "https://github.com/kmmehedihassan/mission-restart-a3",
        label: "GitHub",
        icon: <FaGithub size={15} />,
    },
];

const STATS = [
    { value: "29.6M", label: "Downloads" },
    { value: "906K",  label: "Reviews"   },
    { value: "132+",  label: "Apps"      },
];

export default function Footer() {
    return (
        <footer className="bg-[#0A0F1E] text-gray-400 overflow-hidden">

            {/* ── Top accent bar ─────────────────────────────────────── */}
            <div className="h-1 w-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500" />

            {/* ── Tagline strip ──────────────────────────────────────── */}
            <div className="border-b border-white/5 py-10 text-center">
                <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Built for{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        Millions.
                    </span>{" "}
                    Crafted with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Purpose.
                    </span>
                </p>
                <p className="mt-3 text-gray-500 text-sm max-w-md mx-auto">
                    Apps that make your everyday life simpler, smarter, and more productive.
                </p>
            </div>

            {/* ── Main footer grid ───────────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Brand column */}
                <div className="space-y-5">
                    <Link
                        to="/"
                        aria-label="AppHub homepage"
                        className="inline-flex items-center gap-3 group"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-md group-hover:bg-indigo-500/40 transition-all duration-300" />
                            <img
                                src={logo}
                                alt="AppHub logo"
                                className="relative w-10 h-10 object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold text-white uppercase tracking-widest group-hover:text-indigo-300 transition-colors duration-200">
                            AppHub
                        </span>
                    </Link>

                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                        We craft innovative apps designed to turn your ideas into
                        digital experiences that truly make an impact.
                    </p>

                    {/* Social icons */}
                    <div className="flex items-center gap-2 pt-1">
                        {SOCIAL_LINKS.map(({ href, label, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10
                                           text-gray-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500
                                           transition-all duration-200"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigation column */}
                <div className="space-y-5">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                        Navigation
                    </h3>
                    <ul className="space-y-3">
                        {NAV_LINKS.map(({ label, path }) => (
                            <li key={label}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `group flex items-center gap-2 text-sm transition-colors duration-200 ${
                                            isActive
                                                ? "text-indigo-400 font-medium"
                                                : "text-gray-400 hover:text-white"
                                        }`
                                    }
                                >
                                    <span className="w-4 h-px bg-current opacity-50 group-hover:w-6 transition-all duration-200" />
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Contribute link */}
                    <a
                        href="https://github.com/kmmehedihassan/mission-restart-a3"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-200 group mt-2"
                    >
                        Contribute on GitHub
                        <FiArrowUpRight
                            size={15}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                        />
                    </a>
                </div>

                {/* Stats column */}
                <div className="space-y-5">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                        Platform Stats
                    </h3>
                    <div className="space-y-4">
                        {STATS.map(({ value, label }) => (
                            <div
                                key={label}
                                className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0"
                            >
                                <span className="text-gray-500 text-sm">{label}</span>
                                <span className="text-white font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Bottom bar ─────────────────────────────────────────── */}
            <div className="border-t border-white/5 py-5 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
                    <p>
                        Copyright &copy; 2026 AppHub &mdash; All rights reserved
                    </p>
                    <p className="flex items-center gap-1">
                        Made with
                        <span className="text-pink-500 text-sm">♥</span>
                        for productivity lovers
                    </p>
                </div>
            </div>

        </footer>
    );
}