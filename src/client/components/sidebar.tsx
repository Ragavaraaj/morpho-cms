import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-900 text-white flex flex-col p-4">
      <div className="text-xl font-bold mb-8">CMS Dashboard</div>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className="hover:text-zinc-300 transition-colors"
            >
              Dashboard
            </Link>
          </li>
          {/* Add more navigation links here as needed */}
        </ul>
      </nav>
      <div className="mt-auto text-xs text-zinc-400">
        © {new Date().getFullYear()} Custom CMS
      </div>
    </aside>
  );
}
