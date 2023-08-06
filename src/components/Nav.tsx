import React from 'react'
import { Link } from 'react-router-dom'

type NavProps = {
  children?: React.ReactNode
}

type LinkProps = {
  children?: React.ReactNode,
  to: string
}

export const Nav: React.FC<NavProps> = ({children}) => (
  <nav className="bg-gray-800">
    <div className="flex items-center justify-center h-16">
      <div className="flex space-x-4">
        {children}
      </div>
    </div>
  </nav>
)

export const NavLink: React.FC<LinkProps> = ({children, to}) => (
  <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2" to={to}>
    {children}
  </Link>
)
