import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, List, PlusCircle, Settings, Users } from 'lucide-react'

const navItems = [
  { name: "Dashboard", href: "/", icon: BarChart },
  { name: "Lead Listing", href: "/leads", icon: List },
  { name: "Lead Management", href: "/manage", icon: PlusCircle },
  { name: "Team", href: "/team", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-white shadow-md">
      <div className="flex h-16 items-center justify-center border-b">
        <h1 className="text-xl font-bold">HSR Motors CRM</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon className="mr-3 h-6 w-6" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

