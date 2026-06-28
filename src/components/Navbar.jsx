import { NavLink } from 'react-router-dom'
import logo from '/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/resources', label: 'Resources' },
  { to: '/join', label: 'Join' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-5 flex items-center justify-between h-14">
        <NavLink to="/" className="flex items-center gap-2 no-underline">
          <img src={logo} alt="Applied AI Club logo" className="h-8 w-8 rounded-full object-cover" />
          <span className="text-sm font-semibold text-neutral-900">Applied AI Club</span>
        </NavLink>
        <div className="flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm rounded transition-colors ${
                  isActive
                    ? 'text-[#CC0000] font-medium'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
