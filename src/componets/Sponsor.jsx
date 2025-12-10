export default function SponsorsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:mt-55">

            {/* ------------------------ TITLE ------------------------ */}
            <h2 className="mx-auto max-w-2xl text-center font-display text-4xl sm:text-5xl font-medium tracking-tighter text-blue-900">
                Current sponsorships for our workshops and speakers.
            </h2>

            {/* ------------------------ LOGOS GRID ------------------------ */}
            <div
                className="
                    mx-auto mt-20
                    grid grid-cols-1 sm:grid-cols-3
                    gap-y-12 gap-x-32 md:gap-x-16 lg:gap-x-32
                    place-content-center max-w-max
                "
            >
                {[
                    "https://keynote.tailwindui.com/_next/static/media/transistor.a1e38d49.svg",
                    "https://keynote.tailwindui.com/_next/static/media/tuple.2f54ed03.svg",
                    "https://keynote.tailwindui.com/_next/static/media/statickit.2e06fcea.svg",
                    "https://keynote.tailwindui.com/_next/static/media/mirage.e12f40ad.svg",
                    "https://keynote.tailwindui.com/_next/static/media/laravel.6faebf7c.svg",
                    "https://keynote.tailwindui.com/_next/static/media/statamic.923101b6.svg",
                ].map((logo, i) => (
                    <div key={i} className="flex items-center justify-center">
                        <img src={logo} alt="Sponsor Logo" width="158" height="48" />
                    </div>
                ))}
            </div>

        </div>
    );
}
