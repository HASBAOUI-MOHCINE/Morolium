import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Globe2, Menu, Moon, SunMedium, X, GraduationCap, BookOpen, Target, FileText, User, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/i18n/TranslationProvider"
import { useTheme } from "@/ui/ThemeProvider"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext"
import AvatarDropdown from "@/ui/AvatarDropdown"

const buildNavLinks = (labels, user) => {
    const links = [
        { to: "/", label: labels?.[0] ?? "Overview", icon: BookOpen },
        { to: "/courses", label: labels?.[1] ?? "Courses", icon: GraduationCap },
        { to: "/tracks", label: labels?.[2] ?? "Tracks", icon: Target },
        { to: "/exercises", label: labels?.[3] ?? "Exercises", icon: FileText },
    ];
    
    return links;
}

const adminLink = { to: "/admin", label: "Admin", icon: Target };

export default function Navbar() {
	const location = useLocation()
	const { theme, toggleTheme } = useTheme()
	const { t, language, setLanguage } = useTranslation()
	const { user, logout } = useAuth()
	const [mobileOpen, setMobileOpen] = useState(false)

	useEffect(() => {
		setMobileOpen(false)
	}, [location.pathname])

	if (['/login', '/register'].includes(location.pathname)) {
		const isRTL = language === 'ar';
		return (
			<header 
				className={cn(
					"sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
				)}
				dir={isRTL ? 'rtl' : 'ltr'}
			>
				<div className="container flex h-16 items-center justify-between">
					<Link 
						to="/" 
						className="flex items-center gap-2 transition-opacity hover:opacity-90"
					>
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
							M
						</div>
						<span className="text-xl font-bold tracking-tight text-foreground">
							Morolium
						</span>
					</Link>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button 
								variant="ghost" 
								size="icon" 
								aria-label="Switch language"
							>
								<Globe2 className="h-5 w-5" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent 
							align={isRTL ? "start" : "end"}
							className="w-40"
						>
							<DropdownMenuItem onClick={() => setLanguage("en")}>
								<span className="flex items-center gap-2 w-full">
									<span>🇺🇸</span> English
								</span>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLanguage("fr")}>
								<span className="flex items-center gap-2 w-full">
									<span>🇫🇷</span> Français
								</span>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLanguage("ar")}>
								<span className="flex items-center gap-2 w-full">
									<span>🇸🇦</span> العربية
								</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</header>
		)
	}

	const navLinks = buildNavLinks(t.nav, user)
    if (user && user.role === 'Admin') {
        navLinks.push(adminLink);
    }

	const isActive = (path) =>
		location.pathname === path || location.pathname.startsWith(`${path}/`)

	const isRTL = language === 'ar'

	return (
		<header 
			className={cn(
				"sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
			)}
			dir={isRTL ? 'rtl' : 'ltr'}
		>
			<div className="container flex h-16 items-center">
				<div className={cn(
					"flex w-full items-center justify-between",
					isRTL && "flex-row-reverse"
				)}>
					{/* Logo Section */}
					<div className="flex items-center gap-8 lg:gap-12">
						<Link 
							to="/" 
							className="flex items-center gap-2 transition-opacity hover:opacity-90"
						>
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
								M
							</div>
							<span className="text-xl font-bold tracking-tight text-foreground">
								Morolium
							</span>
						</Link>
					</div>

						{/* Desktop Navigation */}
						<nav className="hidden items-center gap-6 md:flex">
							{navLinks.map((link) => {
								const Icon = link.icon
								return (
									<Link
										key={link.to}
										to={link.to}
										className={cn(
											"flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
											isActive(link.to)
												? "text-primary"
												: "text-muted-foreground",
											isRTL ? "flex-row-reverse" : "flex-row"
										)}
									>
										{link.label}
									</Link>
								)
							})}
						</nav>

					{/* Right Section - Controls */}
					<div className={cn(
						"flex items-center gap-2",
						isRTL && "flex-row-reverse"
					)}>
						{/* Auth Buttons (Desktop) */}
						<div className="hidden md:flex items-center gap-2">
							{user ? (
								<AvatarDropdown />
							) : (
								<>
									<Button variant="ghost" size="sm" asChild>
										<Link to="/login">{t.login || "Login"}</Link>
									</Button>
									<Button size="sm" asChild>
										<Link to="/register">{t.signup || "Sign Up"}</Link>
									</Button>
								</>
							)}
						</div>

						{/* Mobile Menu Toggle */}
						<Button
							variant="ghost"
							size="icon"
							className="md:hidden"
							onClick={() => setMobileOpen((prev) => !prev)}
							aria-label="Toggle navigation"
						>
							{mobileOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>

						{/* Language Selector */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button 
									variant="ghost" 
									size="icon" 
									aria-label="Switch language"
								>
									<Globe2 className="h-5 w-5" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent 
								align={isRTL ? "start" : "end"}
								className="w-40"
							>
								<DropdownMenuItem onClick={() => setLanguage("en")}>
									<span className="flex items-center gap-2 w-full">
										<span>🇺🇸</span> English
									</span>
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setLanguage("fr")}>
									<span className="flex items-center gap-2 w-full">
										<span>🇫🇷</span> Français
									</span>
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setLanguage("ar")}>
									<span className="flex items-center gap-2 w-full">
										<span>🇸🇦</span> العربية
									</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						{/* Theme Toggle */}
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							aria-label="Toggle theme"
						>
							<SunMedium className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						</Button>
					</div>
				</div>
			</div>

			{/* Simple Mobile Navigation */}
			{mobileOpen && (
				<div className="border-t border-border bg-background md:hidden">
					<div className="container py-4 space-y-4">
						{user ? (
							<>
								<nav className="flex flex-col gap-2">
									{navLinks.map((link) => {
										const Icon = link.icon
										return (
											<Link
												key={link.to}
												to={link.to}
												className={cn(
													"flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
													isActive(link.to)
														? "bg-primary/10 text-primary"
														: "hover:bg-accent hover:text-accent-foreground",
													isRTL ? "flex-row-reverse" : "flex-row"
												)}
												onClick={() => setMobileOpen(false)}
											>
												<Icon className="h-4 w-4" />
												{link.label}
											</Link>
										)
									})}
									<Link
										to="/profile"
										className={cn(
											"flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
											isActive('/profile')
												? "bg-primary/10 text-primary"
												: "hover:bg-accent hover:text-accent-foreground",
											isRTL ? "flex-row-reverse" : "flex-row"
										)}
										onClick={() => setMobileOpen(false)}
									>
										<User className="h-4 w-4" />
										{t.profile || "Profile"}
									</Link>
								</nav>
								
								<div className="flex flex-col gap-2 pt-4 border-t border-border">
									<Button 
										variant="ghost" 
										className={cn("justify-start gap-3 px-3 text-muted-foreground hover:text-foreground", isRTL && "flex-row-reverse")}
										onClick={() => {
											logout();
											setMobileOpen(false);
										}}
									>
										<LogOut className="h-4 w-4" />
										{t.signOut || "Sign out"}
									</Button>
								</div>
							</>
						) : (
							<div className="flex flex-col gap-2">
								<Button variant="outline" asChild onClick={() => setMobileOpen(false)}>
									<Link to="/login">{t.login || "Login"}</Link>
								</Button>
								<Button asChild onClick={() => setMobileOpen(false)}>
									<Link to="/register">{t.signup || "Sign Up"}</Link>
								</Button>
							</div>
						)}
					</div>
				</div>
			)}
		</header>
	)
}