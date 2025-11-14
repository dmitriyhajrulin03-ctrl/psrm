"use client";

import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-4">
      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="block px-4 py-2 rounded hover:bg-gray-100"
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/analytics"
          className="block px-4 py-2 rounded hover:bg-gray-100"
        >
          Analytics
        </Link>
        <Link
          href="/dashboard/settings"
          className="block px-4 py-2 rounded hover:bg-gray-100"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}




