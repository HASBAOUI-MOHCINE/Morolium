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
        className="flex items-center gap-3 pl-3 pr-1 py-1 rounded-full border border-border bg-background hover:bg-accent transition-colors duration-200 group"
        aria-expanded={open}
      >
        <div className="flex flex-col items-end mr-1">
            <span className="text-sm font-semibold leading-none group-hover:text-primary transition-colors">{user?.name}</span>
            <span className="text-[10px] text-muted-foreground leading-none mt-1">{user?.role || 'Student'}</span>
        </div>
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-sm">
            {initials}
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-popover text-popover-foreground border rounded-lg shadow-lg z-50 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
          <div className="p-1">
            <Link to="/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium transition-colors">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                Profile
            </Link>
            <div className="h-px bg-border my-1 mx-2" />
            <button 
              onClick={logout}
              className="w-full flex items-center gap-3 text-left px-3 py-2.5 rounded-md hover:bg-destructive/10 hover:text-destructive text-sm font-medium text-destructive transition-colors"
            >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10 text-destructive">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                </div>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
