import heroImg from "../assets/hero.png";

const STORE_LINKS = [
    {
        href: "https://play.google.com/store/games",
        label: "Get it on Google Play",
        logoSrc: "https://img.icons8.com/?size=96&id=rZwnRdJyYqRi&format=png",
        logoAlt: "Google Play icon",
        text: "Google Play",
    },
    {
        href: "https://www.apple.com/app-store/",
        label: "Download on the App Store",
        logoSrc: "https://img.icons8.com/?size=160&id=FY7tVsFoeON4&format=png",
        logoAlt: "Apple App Store icon",
        text: "App Store",
    },
];

export default function HeroSection() {
    return (
        <section className="bg-[#E9E9E9]" aria-label="Hero banner">
            <div className="w-11/12 mx-auto flex flex-col items-center justify-center pt-10">

                {/* Headline + subtext + store buttons */}
                <div className="space-y-5 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-xl mx-auto">
                        We Build <br />
                        <span className="text-indigo-600">Productive</span>{" "}Apps
                    </h1>

                    <p className="italic max-w-2xl mx-auto text-gray-600">
                        At{" "}
                        <span className="text-indigo-600 font-bold">AppHub</span>, we craft
                        innovative apps designed to make everyday life simpler, smarter, and
                        more exciting. Our goal is to turn your ideas into digital
                        experiences that truly make an impact.
                    </p>

                    {/* App store download buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {STORE_LINKS.map(({ href, label, logoSrc, logoAlt, text }) => (
                            <a
                                key={text}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:shadow-xl transition-shadow duration-200"
                            >
                                <img src={logoSrc} alt={logoAlt} className="w-10" />
                                <span className="text-xl font-semibold">{text}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Hero phone mockup */}
                <img
                    src={heroImg}
                    alt="App showcase on mobile device"
                    className="pt-10 max-w-full"
                />
            </div>
        </section>
    );
}
