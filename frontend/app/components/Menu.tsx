type MenuItem = {
    id: number;
    name: string;
    price: number;
    description: string;
  };
  
  async function getMenuItems(): Promise<MenuItem[]> {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/menu_items`,
      { cache: "no-store" }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch menu items");
    }
  
    return res.json();
  }
  
  export default async function Menu() {
    const items = await getMenuItems();
  
    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="font-semibold">${item.price}</p>
          </div>
        ))}
      </div>
    );
  }