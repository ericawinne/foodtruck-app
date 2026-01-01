import Link from "next/link";

export default function NavBar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-bold">
          Food Truck
        </Link>

        <div className="flex gap-4 text-sm">
          <Link href="/menu" className="hover:underline">
            Menu
          </Link>
          <Link href="/catering" className="hover:underline">
            Catering
          </Link>
          <Link href="/story" className="hover:underline">
            Our Story
          </Link>
        </div>
      </nav>
    </header>
  );
}
