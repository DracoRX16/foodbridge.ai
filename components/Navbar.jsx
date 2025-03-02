"use client";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-6 flex justify-between items-center z-50">
      <div className="text-2xl font-bold text-emerald-400">
        FoodBridge<span className="text-white">.</span><span className="text-blue-400">AI</span>
      </div>

      
      <div className="flex gap-6">
        {[
          { name: "Home", path: "/" },
          { name: "AI Scanner", path: "/scanner" },
          { name: "Food Donation", path: "/donation" },
        ].map(({ name, path }) => (
          <a
            key={name}
            href={path}
            className={`px-5 py-2 rounded-lg text-lg font-medium transition-all duration-300
              ${
                pathname === path
                  ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
}
