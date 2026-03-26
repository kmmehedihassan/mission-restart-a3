const STATS = [
    {
        label: "Total Downloads",
        value: "29.6M",
        description: "21% more than last month",
        hasSideBorder: false,
    },
    {
        label: "Total Reviews",
        value: "906K",
        description: "46% more than last month",
        hasSideBorder: true,
    },
    {
        label: "Active Apps",
        value: "132+",
        description: "31 more will launch",
        hasSideBorder: false,
    },
];

export default function StatsSection() {
    return (
        <section
            aria-label="Platform statistics"
            className="bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]"
        >
            <div className="pt-10 flex flex-col justify-center items-center">

                <h2 className="text-white font-bold text-3xl md:text-4xl text-center">
                    Trusted by Millions, Built for You
                </h2>

                {/* Stats grid */}
                <dl className="flex flex-col lg:flex-row gap-10 py-10 text-white">
                    {STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className={`flex flex-col items-center text-center space-y-3 ${
                                stat.hasSideBorder ? "border-x border-white/30 px-8" : ""
                            }`}
                        >
                            <dt className="text-lg opacity-90">{stat.label}</dt>
                            <dd className="text-4xl font-bold px-4">{stat.value}</dd>
                            <p className="text-sm opacity-80">{stat.description}</p>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
