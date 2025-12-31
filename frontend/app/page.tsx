import Menu from "./components/Menu";

type MenuItem = {
  id: number;
  name: string;
  price: string; // Rails decimal comes across as string
  description: string;
};

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/menu_items`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch menu items");

  const items: MenuItem[] = await res.json();

  return (
    <main className="p-6">
      <h4 className="text-3xl font-bold mb-4">From Scratch Menu 🏌️‍♂️</h4>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="border rounded p-3">
            <div className="flex justify-between font-semibold">
              <span>{item.name} ✨</span>          
              <span>${item.price}</span>
            </div>
            <p className="text-sm opacity-80">{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
