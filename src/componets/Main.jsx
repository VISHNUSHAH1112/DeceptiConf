import Bg from "/1.jpg";

export default function Main() {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-900/40 to-transparent"></div> */}

            <div className="relative z-10 w-full min-h-screen">
                <header className="relative z-50 flex-none lg:pt-11">
                    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 mx-auto max-w-7xl sm:px-6 lg:px-20 gap-6">

                        <div className="order-1 md:order-2 w-full md:w-auto text-center md:text-left">
                            <p className="flex flex-wrap justify-center md:justify-start items-center gap-2  font-mono text-[15px]" style={{ color: "#155dfc" }}>
                                <span>04-06</span>
                                <span>of</span>
                                <span>April,</span>
                                <span>2002</span>
                                <svg width="14" height="14" viewBox="0 0 20 20">
                                    <rect
                                        x="7"
                                        y="7"
                                        width="10"
                                        height="10"
                                        fill="#60A5FA"
                                        transform="rotate(45 10 10)"
                                        rx="2"
                                    />
                                </svg>
                                <span>Los</span>
                                <span>Angeles,</span>
                                <span>CA</span>
                            </p>
                        </div>

                        {/* LOGO */}
                        <div className="flex items-center gap-3 order-2 md:order-1">
                            <svg
                                className="h-12 w-auto"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                            >
                                <path
                                    fill="#3B82F6"
                                    d="M1.172 21.172a4 4 0 000 5.656l20 20a4 4 0 105.656-5.656l-20-20a4 4 0 00-5.656 0z"
                                />
                                <path
                                    fill="#93C5FD"
                                    d="M26.828 6.828a4 4 0 10-5.656-5.656l-19 19A3.987 3.987 0 015 19a3.98 3.98 0 012.827 1.172L10.657 23 26.828 6.828z"
                                />
                            </svg>
                            <p className="text-2xl font-semibold text-black drop-shadow">
                                DeceptiConf
                            </p>
                        </div>

                        <div className="hidden md:block order-3">
                            <a
                                href="#"
                                className="bg-blue-500 text-white font-semibold hover:bg-blue-400 px-6 py-3 rounded-2xl text-base shadow-lg"
                            >
                                Get your ticket
                            </a>
                        </div>
                    </div>
                </header>

                <div className="max-w-4xl mx-auto pt-24 pb-20 px-8">
                    <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight drop-shadow-lg" style={{ color: "#155dfc" }}>
                        A design conference
                        <br /> for the dark side.
                    </h1>

                    <div className="mt-6 space-y-6 text-xl sm:text-2xl tracking-tight drop-shadow-sm" style={{ color: "#1c398e" }}>
                        <p>
                            The next generation of web users are tech-savvy and suspicious.
                            They know how to use dev tools, detect scams instantly, and
                            they certainly aren’t accepting Western Union checks.
                        </p>

                        <p>
                            At DeceptiConf you’ll learn the latest dark patterns crafted
                            to trick even the smartest visitors — and how to deploy them
                            without ever being detected.
                        </p>
                    </div>

                    {/* MOBILE BUTTON */}
                    <div className="block md:hidden mt-8">
                        <a
                            href="#"
                            className="block bg-blue-500 text-white font-semibold hover:bg-blue-400 px-6 py-4 rounded-2xl text-lg shadow-lg text-center"
                        >
                            Get your ticket
                        </a>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-2 md:flex md:gap-20 text-sm mt-12 " style={{ color: "#1c398e" }}>
                        {[
                            { title: "Speakers", value: "18" },
                            { title: "People Attending", value: "2,091" },
                            { title: "Venue", value: "Staples Center" },
                            { title: "Location", value: "Los Angeles" },
                        ].map((item, i) => (
                            <div key={i} className="mb-6 md:mb-0">
                                <p className="text-blue-200 font-mono" style={{ color: "#155dfc" }}>{item.title}</p>
                                <p className="text-2xl font-bold">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
