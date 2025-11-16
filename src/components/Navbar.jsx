import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const NAV_LINKS = [
	{ to: '/', label: 'Overview' },
	{ to: '/courses', label: 'Courses' },
	{ to: '/tracks', label: 'Tracks' },
	{ to: '/exercises', label: 'Exercises' },
	{ to: '/resources', label: 'Resources' },
	{ to: '/profile', label: 'Profile' }
];

export default function Navbar() {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	const isActive = (path) => location.pathname === path;

	return (
		<header className="sticky top-0 z-40">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-cyan-400/40 via-indigo-400/40 to-purple-500/40 blur-3xl" />

			<nav className="relative mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 shadow-lg backdrop-blur-xl transition dark:border-slate-700 dark:bg-slate-900/80">
					<Link
						to="/"
						className="text-lg font-semibold tracking-tight text-slate-900 transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-300"
					>
					
					</Link>

					<div className="hidden md:flex items-center gap-1 rounded-xl bg-white/60 px-2 py-1 shadow-inner backdrop-blur-md dark:bg-slate-800/60">
						<FaSearch className="mx-2 text-slate-400" size={13} />
						<input
							type="search"
							value={searchValue}
							onChange={(event) => setSearchValue(event.target.value)}
							placeholder="Search"
							className="w-40 bg-transparent text-sm text-slate-600 placeholder-slate-400 outline-none transition focus:w-52 dark:text-slate-200"
						/>
					</div>

					<div className="hidden md:flex items-center gap-1 lg:gap-2">
						{NAV_LINKS.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
									isActive(link.to)
										? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-cyan-500/30'
										: 'text-slate-600 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-white'
								}`}
							>
								{link.label}
							</Link>
						))}
					</div>

					<button
						type="button"
						onClick={() => setMenuOpen((open) => !open)}
						className="md:hidden rounded-xl border border-white/60 bg-white/80 p-2 text-slate-600 shadow-sm transition hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
						aria-label="Toggle navigation"
					>
						{menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
					</button>
				</div>

				{menuOpen && (
					<div className="mt-3 space-y-3 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur-xl md:hidden dark:border-slate-700 dark:bg-slate-900/85">
						<label className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/70 px-3 py-2 text-sm text-slate-500 shadow-inner backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300">
							<FaSearch size={14} />
							<input
								type="search"
								value={searchValue}
								onChange={(event) => setSearchValue(event.target.value)}
								placeholder="Search"
								className="w-full bg-transparent text-slate-700 placeholder-slate-400 outline-none dark:text-slate-200"
							/>
						</label>

						<div className="flex flex-col gap-1">
							{NAV_LINKS.map((link) => (
								<Link
									key={link.to}
									to={link.to}
									className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
										isActive(link.to)
											? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-cyan-500/30'
											: 'text-slate-600 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-white'
									}`}
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
