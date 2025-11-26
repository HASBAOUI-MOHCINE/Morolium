import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AvatarDropdown(){
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const { user, logout } = useAuth()

  useEffect(() => {
    function onDoc(e){
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  const initials = user?.name 
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
    : 'U';

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm"
        aria-expanded={open}
      >
        {initials}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-popover text-popover-foreground border rounded-md shadow-md z-50">
          <div className="p-2">
            <div className="px-3 py-2 text-sm font-medium border-b mb-2">
              {user?.name}
            </div>
            <Link to="/profile" className="block px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground text-sm">Profile</Link>
            <button 
              onClick={logout}
              className="w-full text-left px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground text-sm text-red-500"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
