import Link from "next/link";
import Carousel from "./components/Carousel";

type Stop = {
  day: number; // 0=Sun ... 6=Sat
  label: string;
  locationName: string;
  hours: string;
  addressLine: string;
  mapUrl: string;
};

function getTodayStop(stops: Stop[], now = new Date()): Stop | null {
  const day = now.getDay();
  return stops.find((s) => s.day === day) ?? null;
}

export default function Home() {
  // TODO: later we’ll fetch this from Rails (or a CMS). For now: hard-coded schedule.
  const stops: Stop[] = [
    {
      day: 1,
      label: "Monday",
      locationName: "Redstone Arsenal",
      hours: "10:00 AM – 2:00 PM",
      addressLine: "Redstone Arsenal, Huntsville, AL",
      mapUrl: "https://maps.google.com/?q=Redstone+Arsenal+Huntsville+AL",
    },
    {
      day: 3,
      label: "Wednesday",
      locationName: "Downtown Huntsville",
      hours: "11:00 AM – 2:00 PM",
      addressLine: "Downtown Huntsville, AL",
      mapUrl: "https://maps.google.com/?q=Downtown+Huntsville+AL",
    },
    {
      day: 5,
      label: "Friday",
      locationName: "Campus / Brewery Pop-Up",
      hours: "5:00 PM – 9:00 PM",
      addressLine: "Huntsville, AL",
      mapUrl: "https://maps.google.com/?q=Huntsville+AL",
    },
  ];

  const today = getTodayStop(stops);

  return (
    <main className="mx-auto max-w-4xl p-6 text-black">
      {/* HERO */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Cookin with Cahrrahh</h1>
            <p className="mt-2 text-base opacity-100">
              Scratch-made favs • Fast pickup • Catering available
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/menu"
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white"
            >
              View Menu
            </Link>
            <Link
              href="/catering"
              className="rounded-xl border px-4 py-2 text-sm font-semibold"
            >
              Catering
            </Link>
          </div>
        </div>

        {/* Placeholder for logo */}

        <div className="mt-6">
          <Carousel
          intervalMs={3500}
            slides={[
              { src: "/story-3.jpg", alt: "Food photo 1" },
              { src: "/hero-2.jpg", alt: "Food photo 2" },
              { src: "/hero-3.jpg", alt: "Food photo 3" },
              { src: "/hero-4.jpg", alt: "Food photo 4" },
              { src: "/hero-7.jpg", alt: "Food photo 7" },
              { src: "/hero-8.jpg", alt: "Food photo 8" },
              { src: "/hero-9.jpg", alt: "Food photo 9" },
            ]}
          />
        </div>
        {/* <div className="mt-6 rounded-xl bg-gray-100 p-8 text-center">
          <p className="text-sm opacity-70">Logo / rotating photos go here (next step)</p>
        </div> */}
      </section>

      {/* CURRENT LOCATION */}
      <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Current Location:</h2>

        {today ? (
          <div className="mt-3">
            <p className="text-lg font-semibold">
              Today ({today.label}): {today.locationName}
            </p>
            <p className="mt-1 opacity-80">{today.hours}</p>
            <p className="mt-1 opacity-80">{today.addressLine}</p>

            <a
              href={today.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-gray-50"
            >
              {/* Map placeholder */}
              Open in Google Maps
            </a>
          </div>
        ) : (
          <div className="mt-4 rounded-xl border bg-gray-100 p-6 text-center">
            <p className="text-sm font-semibold">Map Preview</p>
            <p className="mt-1 text-sm opacity-80">
              Google Maps goes here
            </p>
          </div>
        )}
      </section>

      {/* QUICK LINKS */}
      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        <Link
          href="/menu"
          className="rounded-2xl border bg-white p-5 shadow-sm hover:bg-gray-50"
        >
          <h3 className="text-lg font-semibold">Menu</h3>
          <p className="mt-1 text-sm opacity-80">Jetty Scratch menu here.</p>
        </Link>

        <Link
          href="/story"
          className="rounded-2xl border bg-white p-5 shadow-sm hover:bg-gray-50"
        >
          <h3 className="text-lg font-semibold">Our Story</h3>
          <p className="mt-1 text-sm opacity-80">About the fam.</p>
        </Link>

        <Link
          href="/catering"
          className="rounded-2xl border bg-white p-5 shadow-sm hover:bg-gray-50"
        >
          <h3 className="text-lg font-semibold">Catering</h3>
          <p className="mt-1 text-sm opacity-80">Bring us to your event.</p>
        </Link>
      </section>
    </main>
  );
}