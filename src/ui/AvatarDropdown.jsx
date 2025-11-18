import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AvatarDropdown({ initials = 'NT' }){
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    function onDoc(e){
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-semibold text-sm"
        aria-expanded={open}
      >
        {initials}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white card z-50 dark:bg-slate-800">
          <div className="p-2">
            <Link to="/profile" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-700">Profile</Link>
            <Link to="/settings" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-700">Settings</Link>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-700">Sign out</button>
          </div>
        </div>
      )}
    </div>
  )
}
