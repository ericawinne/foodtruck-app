type MenuItem = {
  id: number;
  name: string;
  price: string; // Rails decimal comes across as string
  description: string;
  image_url?: string | null;
};

export default async function MenuPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/menu_items`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu items");
  }

  const items: MenuItem[] = await res.json();

  return (
    <main className="mx-auto max-w-4xl p-6 text-black">
      <h1 className="text-3xl font-bold">Menu</h1>
      <p className="mt-2 opacity-80">
        Prices and items may change — follow us for daily specials.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border bg-white p-4 shadow-sm">
            {/* Image placeholder */}

            {item.image_url ? (
      <img
        src={item.image_url}
        alt={item.name}
        className="mb-3 h-40 w-full rounded-xl object-cover"
      />
  ) : (
    <div className="mb-3 h-40 w-full rounded-xl bg-gray-100" />
  )}
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="shrink-0 font-semibold">${item.price}</p>
            </div>

            <p className="mt-2 text-sm opacity-80">{item.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}