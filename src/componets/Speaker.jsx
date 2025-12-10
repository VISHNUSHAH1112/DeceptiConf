import React from "react";

const speakers = [
    { name: "Steven McHail", role: "Designer at Globex Corporation", img: "./1.webp" },
    { name: "Jaquelin Isch", role: "UX Design at InGen", img: "./2.webp" },
    { name: "Dianne Guilianelli", role: "General Manager at Initech", img: "./3.webp" },
    { name: "Luis R.", role: "Product Designer", img: "./4.webp" },
    { name: "Marcus H.", role: "Software Engineer", img: "./5.webp" },
    { name: "Sara Q.", role: "Marketing Lead", img: "./6.webp" },
];

export default function SpeakersPage() {
    return (
        <div className="px-8 md:px-24 py-16">

            {/* ---------------------- TITLE ---------------------- */}
            <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tighter text-blue-600">
                Speakers
            </h1>

            <p className="mt-4 font-display text-2xl tracking-tight text-gray-900">
                Learn from the experts on the cutting-edge of deception at <br />
                the most sinister companies.
            </p>

            {/* ---------------------- MAIN LAYOUT ---------------------- */}
            <div className="flex flex-col md:flex-row gap-10 mt-16">

                {/* LEFT TIMELINE ---------------------- */}
                <div className="md:w-1/4 relative">

                    {/* Vertical line */}
                    <div className="absolute left-[6px] top-0 bottom-0 h-[300px] w-px bg-gray-300"></div>

                    <ul className="pl-10 space-y-14">

                        {/* Day 1 */}
                        <li className="relative">
                            <div className="absolute left-[-38px] top-1 w-2.5 h-2.5 bg-blue-600 rotate-45"></div>
                            <span className="text-sm text-blue-600 font-mono block mb-1">
                                Opening Day
                            </span>
                            <span className="text-2xl font-semibold text-blue-900 tracking-tight">
                                April 4
                            </span>
                        </li>

                        {/* Day 2 */}
                        <li className="relative">
                            <div className="absolute left-[-38px] top-1 w-2.5 h-2.5 bg-gray-400 rotate-45"></div>
                            <span className="text-sm text-gray-600 font-mono block mb-1">
                                Speakers & Workshops
                            </span>
                            <span className="text-2xl font-semibold text-blue-900 tracking-tight">
                                April 5
                            </span>
                        </li>

                        {/* Day 3 */}
                        <li className="relative">
                            <div className="absolute left-[-38px] top-1 w-2.5 h-2.5 bg-gray-400 rotate-45"></div>
                            <span className="text-sm text-gray-600 font-mono block mb-1">
                                Interviews
                            </span>
                            <span className="text-2xl font-semibold text-blue-900 tracking-tight">
                                April 6
                            </span>
                        </li>

                    </ul>
                </div>

                {/* ---------------------- SPEAKER GRID ---------------------- */}
                <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12">
                    {speakers.map((speaker, i) => (
                        <div key={i} className="flex flex-col group">

                            {/* Speaker Card */}
                            <div className="relative h-72 overflow-hidden rounded-4xl group">

                                {/* Decorative border */}
                                <div
                                    className="
                                        absolute top-0 right-4 bottom-6 left-0
                                        xl:right-6
                                        rounded-4xl border border-blue-300
                                        transition duration-300
                                        group-hover:scale-95
                                    "
                                ></div>

                                {/* Background + Image clipped */}
                                <div
                                    className="absolute inset-0 bg-indigo-50"
                                    style={{ clipPath: "url(#clip-shape)" }}
                                >
                                    <img
                                        src={speaker.img}
                                        alt={speaker.name}
                                        className="
                                            absolute inset-0 h-full w-full object-cover
                                            transition-all duration-500 ease-out
                                            group-hover:scale-110 group-hover:brightness-110
                                        "
                                    />
                                </div>
                            </div>

                            {/* Speaker Name */}
                            <h3 className="font-semibold text-lg mt-4">
                                {speaker.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {speaker.role}
                            </p>

                        </div>
                    ))}
                </div>
            </div>

            {/* SVG Clip Path Definition */}
            <svg width="0" height="0">
                <defs>
                    <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
                        <path d="M0,0 H1 V1 H0 Z" />
                    </clipPath>
                </defs>
            </svg>

        </div>
    );
}
